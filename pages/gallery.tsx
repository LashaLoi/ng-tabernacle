import * as THREE from 'three'
import dynamic from 'next/dynamic'
import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { Minimap, damp, state } from '../modules/gallery/minimap'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { LinkButton } from '../components/buttons'
import Head from 'next/head'
import PageWrapper from '../components/page-wrapper'

function Item({
  index,
  position,
  scale,
  c = new THREE.Color(),
  ...props
}: any) {
  const ref = useRef<any>()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const click = () => (state.clicked = index === clicked ? null : index)
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    )
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    )
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    )
    if (clicked !== null && index < clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      )
    if (clicked !== null && index > clicked)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      )
    if (clicked === null || clicked === index)
      ref.current.position.x = damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      )
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    )
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? 'white' : '#aaa'),
      hovered ? 0.3 : 0.1
    )
  })
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  )
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap
  return (
    <ScrollControls
      horizontal
      damping={10}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {
          urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  )
}

export const App = () => (
  <Canvas
    gl={{ antialias: false }}
    dpr={[1, 1.5]}
    onPointerMissed={() => (state.clicked = null)}
  >
    <Items />
  </Canvas>
)

function Gallery() {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [])

  return (
    <PageWrapper itemKey="gallery">
      <div className="gallery relative h-screen">
        <Head>
          <title>Галерея</title>
        </Head>
        <div className="sm:pb-0 pb-[60px] h-screen">
          <Suspense
            fallback={
              <div className="w-full h-full justify-center items-center flex">
                Загрузка галереи...
              </div>
            }
          >
            <App />
          </Suspense>

          <div className="absolute w-full flex justify-center mt-10 top-0">
            <LinkButton onClick={handleBack}>Вернуться</LinkButton>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

const NoSSRGallery = dynamic(() => Promise.resolve(Gallery), {
  ssr: false,
})

export default NoSSRGallery
