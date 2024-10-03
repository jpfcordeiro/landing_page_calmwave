// components/WaveBackground.jsx
import React from "react";
import { motion } from "framer-motion";
import '../styles/wavebackground.css'

const WaveBackground = () => {
  const waveAnimation = {
    animate: {
      pathLength: [0, 1, 0], // Anima o comprimento do caminho
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="wave-container">
      <motion.svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M0,128L40,112C80,96,160,64,240,58.7C320,53,400,75,480,90.7C560,107,640,117,720,122.7C800,128,880,128,960,117.3C1040,107,1120,85,1200,74.7C1280,64,1360,64,1400,58.7L1440,53L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320H0Z"
          fill="#e0f7fa" // Cor da onda
          variants={waveAnimation}
        />
      </motion.svg>
    </div>
  );
};

export default WaveBackground;
