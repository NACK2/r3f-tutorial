import { Canvas } from '@react-three/fiber'
import Cube from './components/Cube'
import './App.css'

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 5]} />
      <Cube position={[2, 0, -2]} size={[1, 1, 1]} color={'red'}/>
      <Cube position={[-2, 0, 2]} size={[1, 1, 1]} color={'hotpink'}/>
      <Cube position={[0, 2, -5]} size={[1, 1, 1]} color={'orange'}/>
      <Cube position={[0, -2, 0]} size={[1, 1, 1]} color={'green'}/>
    </Canvas>
  )
}

export default App
