import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'
import './App.css'

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[-2, 0, 5]} />
      <Cube position={[2, 0, 0]} size={[1, 1, 1]} />
      <Cube position={[-2, 0, 0]} size={[1, 1, 1]} />
      <Cube position={[0, 2, 0]} size={[1, 1, 1]} />
      <Cube position={[0, -2, 0]} size={[1, 1, 1]} />
    </Canvas>
  )
}

export default App
