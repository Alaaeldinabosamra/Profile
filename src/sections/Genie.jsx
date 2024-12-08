import React, { useState, useRef, useCallback } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lamp from "../components/Lamp.jsx";
import CanvasLoader from "../components/Loading.jsx";
import Popup from "../components/Popup.jsx";
import confetti from "canvas-confetti";
// import ConfettiEffect from "../components/ConfettiEffect"; // Import the new ConfettiEffect component

function Genie() {
  const [showModal, setShowModal] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [userWish, setUserWish] = useState("");
  // const [triggerConfetti, setTriggerConfetti] = useState(false); // State to trigger confetti
  const audioRef = useRef(new Audio("/audios/genie.mp3"));
  const audioNotHereRef = useRef(new Audio("/audios/no-genie.mp3"));

  const handlePointerDown = useCallback(() => {
    const messages = [
      "The genie is here! Ask for your wishes!",
      "The Genie is not here, try again later",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setTextMessage(randomMessage);
    setShowModal(true); // Show initial modal

    audioRef.current.currentTime = 0;

    if (randomMessage === "The genie is here! Ask for your wishes!") {
      audioRef.current.play();
      // setTriggerConfetti(true); // Trigger confetti effect when the genie is here
      confetti();
    } else {
      audioNotHereRef.current.play();
    }
  }, []);

  const handleWishSubmit = () => {
    // Handle wish submission logic (send userWish to AI, etc.)
    console.log("User wish:", userWish);
    setUserWish(""); // Clear the textarea after submission
  };

  const closeModal = useCallback(() => {
    setShowModal(false);
    audioRef.current.pause();
    audioNotHereRef.current.pause();
    audioRef.current.currentTime = 0;
    audioNotHereRef.current.currentTime = 0;
    // setTriggerConfetti(false); // Reset the confetti trigger
  }, []);

  return (
    <section
      className="relative my-20 flex flex-col justify-between"
      id="genie"
    >
      <div className="w-[90%] sm-custom:h-[55vh] md:h-[80%] rounded-xl shadow-xl overflow-hidden mx-auto">
        <h1 className="head-text text-center text-3xl font-bold">
          Explore the magic!
        </h1>
        <Canvas
          className="w-full h-full"
          style={{ cursor: "pointer" }}
          camera={{ position: [0, 2, 5], fov: 50 }}
        >
          <ambientLight intensity={1.9} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.7} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
          <Suspense fallback={<CanvasLoader />}>
            <Lamp
              scale={0.17}
              position={[0, -1, 0]}
              onPointerDown={handlePointerDown}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Confetti Effect triggered on Genie Interaction */}
      {/* <ConfettiEffect trigger={triggerConfetti} /> */}

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
