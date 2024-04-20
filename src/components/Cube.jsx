const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}> {/* mesh is building block for 3d objects */}
      <boxGeometry args={size} /> {/* args are x y z dimension size of box */}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Cube
