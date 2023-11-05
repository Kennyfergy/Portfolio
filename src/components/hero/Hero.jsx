import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

// Scroll to the projects section
const scrollToProjects = () => {
  console.log("Button clicked");
  const projectsSection = document.getElementById("Portfolio");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error('No element with ID "Portfolio" found.');
  }
};

const Hero = () => {
  console.log("Hero component rendered");
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>KENNY FERGUSON</motion.h2>
          <motion.h1 variants={textVariants}>Software Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log("CLICK")}
            >
              See My Latest Projects
            </motion.button>
            <button onClick={() => scrollToProjects}>
              See My Latest Projects
            </button>
            <motion.button variants={textVariants}>Contact Me</motion.button> */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/DSC_1315-Edit.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
