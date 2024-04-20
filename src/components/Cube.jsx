import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({ position, size, color }) => {
  const ref = useRef() // remember: updating useRef() does not cause re-render, and useRef() val stays even when rerender happens
  
  useFrame((state, delta) => { // delta is time since last animation frame (diff in time btwn curr and last frame)
    ref.current.rotation.y += delta
    ref.current.rotation.x += delta
  })

  return (
    <mesh position={position} ref={ref}> {/* mesh is building block for 3d objects, storing this cube mesh as a reference */}
      <boxGeometry args={size} /> {/* args are x y z dimension size of box */}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Cube
