import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

const Avatar = ({ animationName = 'Idle', ...props }) => {
  const group = useRef();

  // Load the GLTF model and its animations
  const { scene, animations } = useGLTF('/models/alaa.glb');
  
  // Set up animation actions using the useAnimations hook
  const { actions } = useAnimations(animations, group);
  

  // Effect to trigger animation when animationName changes
  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    // Cleanup function to fade out the animation when it is no longer active
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={2} position={[0, -1, 0]} rotation-y={0.3} />
    </group>
  );
};

useGLTF.preload('/models/alaa.glb');

export default Avatar;
