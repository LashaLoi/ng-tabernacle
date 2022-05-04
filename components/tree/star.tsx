import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from 'maath/random'
import { Vector3 } from 'three'

const v = new Vector3()

export function Stars() {
  const ref = useRef<any>()
  const sphere = inSphere(new Float32Array(2000), {
    radius: 1.5,
  })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

    state.camera.position.lerp(
      v.set(state.mouse.x / 3, state.mouse.y / 3, 10),
      0.01
    )
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* @ts-expect-error: not typed */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          // @ts-expect-error: not typed
          transparent
          color="#ffa0e0"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
