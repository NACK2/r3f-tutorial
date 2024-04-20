import { Canvas } from '@react-three/fiber'
import './App.css'

const App = () => {
  return (
    <Canvas>
      <mesh> {/* mesh is building block for 3d objects */}
        <boxGeometry args={[2, 2, 4]}/> {/* 2x2x4 3d box but looks like square because we are looking from z axis */}
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
