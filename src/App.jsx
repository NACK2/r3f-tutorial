import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Cube from './components/Cube'
import Sphere from './components/Sphere'
import TorusKnot from './components/TorusKnot'
import './App.css'

const App = () => {
  // 33 mins
  // https://github.com/pmndrs/drei
  // https://docs.pmnd.rs/
  // https://threejs.org/docs/
  return (
    <Canvas>
      <directionalLight position={[0, -4, 15]} intensity={1} />
      <PerspectiveCamera position={[0, 0, -7]}>
        {/* <ambientLight intensity={0.3} /> ambient light illuminates every side equally */}
        <group position={[0, 0, 0]}>
          <Cube position={[4, 4, 0]} size={[2, 2, 2]} color='red' />
          <Sphere position={[4, -4, 0]} size={[2, 30, 30]} color='hotpink' />
          <Cube position={[-4, 4, 0]} size={[2, 2, 2]} color='yellow' />
          <TorusKnot position={[-4, -4, 0]} size={[2, 0.3, 100]} color='skyblue' />
        </group>
      </PerspectiveCamera>
    </Canvas>
  )
}

export default App
