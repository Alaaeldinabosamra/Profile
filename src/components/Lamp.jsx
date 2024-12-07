import { useGLTF } from '@react-three/drei';

const Lamp = (props) => {
  const { scene } = useGLTF('/models/lamp1.glb'); // Update with your model path

  return <primitive object={scene} {...props} />;
};

export default Lamp;
