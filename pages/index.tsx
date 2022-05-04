import { Canvas } from '@react-three/fiber'
import { Stars } from '../components/tree/star'
import HomeModule from '../modules/home'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 5 }}
        style={{ height: '100vh' }}
      >
        <Stars />
      </Canvas>
      <HomeModule />
    </div>
  )
}
