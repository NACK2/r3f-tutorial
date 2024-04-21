import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Sphere = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Sphere
