import { Canvas } from '@react-three/fiber'
import './App.css'

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[-2, 0, 10]}/> 
      <mesh position={[2, 0, 0]}> {/* mesh is building block for 3d objects */}
        <boxGeometry args={[1, 1, 1]}/> {/* args are x y z dimension size of box */}
        <meshStandardMaterial color={"orange"}/>
      </mesh>
    </Canvas>
  )
}

export default App
