import * as THREE from 'three'
import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { Minimap, damp, state } from '../modules/gallery/minimap'
import { Button, Tooltip } from 'antd'
import {
  ContactsOutlined,
  FileImageOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import NextImage from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.svg'

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

export default function Gallery() {
  return (
    <div className="gallery relative h-screen">
      <div className="sm:pb-0 pb-[60px] h-screen">
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </div>
      <div className="absolute flex sm:block hidden w-full top-[-30px]">
        <Link href="/" passHref>
          <span className="cursor-pointer ">
            <NextImage
              src={logo.src}
              alt="logo"
              height={250}
              width={250}
              priority
            />
          </span>
        </Link>
      </div>

      <div className="absolute right-10 top-10 md:block hidden">
        <Link href="/" passHref>
          <a className="mr-6 hover:text-white">Главная</a>
        </Link>
        <Link href="/registration" passHref>
          <a className="mr-6 hover:text-white">Регистрация</a>
        </Link>
        <Link href="/program" passHref>
          <a className="mr-6 hover:text-white">Программа</a>
        </Link>
        <Link href="/about" passHref>
          <a className="hover:text-white">Контакты</a>
        </Link>
      </div>

      <div className="flex justify-between items-center absolute text-center w-full px-8 bottom-6 md:hidden block">
        <Link href="/" passHref>
          <Tooltip title="Главная">
            <Button shape="circle" icon={<HomeOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/program" passHref>
          <Tooltip title="Программа">
            <Button shape="circle" icon={<UnorderedListOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/about" passHref>
          <Tooltip title="Контакты">
            <Button shape="circle" icon={<ContactsOutlined />} />
          </Tooltip>
        </Link>
        <Link href="/gallery" passHref>
          <Tooltip title="Галерея">
            <Button shape="circle" icon={<FileImageOutlined />} />
          </Tooltip>
        </Link>
      </div>
    </div>
  )
}
