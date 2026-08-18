"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GalaxyBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars on the client to avoid hydration mismatch
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100, // percentage
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1 to 3px
      duration: Math.random() * 3 + 2, // 2 to 5s
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-primary">
      {/* Background radial gradient for the "galaxy" core glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary opacity-50"></div>
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyBackground;
