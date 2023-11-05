import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Golf Handi-Calc",
    img: "./public/home-page.png",
    desc: "This is a golf handicap calculating app I made for a 2 week sprint project at Emerging Digital Academy. Users can input rounds and courses and the handicap, course handicap, and differentials are all calculated and clearly displayed to the user",
  },
  {
    id: 2,
    title: "React Feedback Loop",
    img: "./public/feedback loop.png",
    desc: "This is a feedback input form with several pages of inputs, build with React, Redux, and Javascript",
  },
  {
    id: 3,
    title: "Movies Saga",
    img: "public/moviesSaga.png",
    desc: "The Movies Web Application provides a platform for exploring and interacting with a wide array of movies. A user can view the list of movies, and click on the list for further details",
  },
  {
    id: 4,
    title: ".Net Pet Hotel",
    img: "./public/PetsTableUpdated.png",
    desc: "This was a .Net and C# project with 2 other people to practice backend .Net.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>A Few of my projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
