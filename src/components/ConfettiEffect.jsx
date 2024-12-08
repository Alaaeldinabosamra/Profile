// src/components/ConfettiEffect.js
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = ({
  trigger,
  shape = "🍍",
  scalar = 2,
  particleCount = 50,
  spread = 180,
  colors = ["#ff9900", "#ffff00", "#ff6600"],
  origin = { x: 0.5, y: 0.5 },
}) => {
  // Trigger confetti effect when `trigger` prop changes
  useEffect(() => {
    if (trigger) {
      // Create a custom shape based on the text passed
      const customShape = confetti.shapeFromText({ text: shape, scalar });

      // Trigger the confetti animation with custom parameters
      confetti({
        shapes: [customShape],
        scalar,
        particleCount,
        spread,
        origin,
        colors,
      });
    }
  }, [trigger, shape, scalar, particleCount, spread, colors, origin]);

  return null; // No need to render anything for the confetti effect
};

export default ConfettiEffect;
