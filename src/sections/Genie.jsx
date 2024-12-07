import React, { useState, useRef, useCallback } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lamp from '../components/Lamp.jsx';
import CanvasLoader from '../components/Loading.jsx';
import confetti from 'canvas-confetti';
import Popup from '../components/Popup.jsx';

function Genie() {
  const [showModal, setShowModal] = useState(false);
  const [textMessage, setTextMessage] = useState('');
  const [userWish, setUserWish] = useState('');
  const audioRef = useRef(new Audio('/audios/genie.mp3')); 
  const audioNotHereRef = useRef(new Audio('/audios/no-genie.mp3')); 

  // Confetti effect configuration
  const scalar = 2;
  const Genies = confetti.shapeFromText({ text: '✨', scalar });

  // Handle Lamp click
  const handlePointerDown = useCallback(() => {
    const messages = [
      "The genie is here! Ask for your wishes!", 
      "The Genie is not here, try again later"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setTextMessage(randomMessage);
    setShowModal(true); // Show initial modal

    audioRef.current.currentTime = 0;

    if (randomMessage === "The genie is here! Ask for your wishes!") {
      audioRef.current.play();
      const duration = 4000;
      const animationEnd = Date.now() + duration;

      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, shapes: [Genies], scalar });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, shapes: [Genies], scalar });
      }, 250);
    } else {
      audioNotHereRef.current.play();
    }
  }, []);

  const handleWishSubmit = () => {
    // Handle wish submission logic (send userWish to AI, etc.)
    console.log('User wish:', userWish);
    // You can handle an AI response here or any other logic
    setUserWish(''); // Clear the textarea after submission
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    audioRef.current.pause();
    audioNotHereRef.current.pause();
    audioRef.current.currentTime = 0;
    audioNotHereRef.current.currentTime = 0;
  }, []);

  return (
    <section className="relative my-20 flex flex-col justify-between" id="genie">
      <div className="w-[90%] sm-custom:h-[55vh] md:h-[80%] rounded-xl shadow-xl overflow-hidden mx-auto">
        <h1 className="head-text text-center text-3xl font-bold">Explore the magic!</h1>
        <Canvas
          className="w-full h-full"
          style={{ cursor: 'pointer' }}
          camera={{ position: [0, 2, 5], fov: 50 }}
        >
          <ambientLight intensity={1.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.7} />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
          <Suspense fallback={<CanvasLoader />}>
            <Lamp scale={0.17} position={[0, -1, 0]} onPointerDown={handlePointerDown} />
          </Suspense>
        </Canvas>
      </div>

      {/* Initial Popup for User Input */}
      {showModal && (
        <Popup
          onClose={closeModal}
          textMessage={textMessage}
          onSubmit={handleWishSubmit}
          userWish={userWish}
          setUserWish={setUserWish}
        />
      )}
    </section>
  );
}

export default Genie;
