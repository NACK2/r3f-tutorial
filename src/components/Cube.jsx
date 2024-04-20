const Cube = ({ position, size }) => {
  return (
    <mesh position={position}> {/* mesh is building block for 3d objects */}
      <boxGeometry args={size} /> {/* args are x y z dimension size of box */}
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

export default Cube
