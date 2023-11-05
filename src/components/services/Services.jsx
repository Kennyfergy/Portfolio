import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLock,
  faRoute,
  faDatabase,
  faBell,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
      //animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Im committed to learning
          <br /> and achieving excellence
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/sotftdevimg copy.png" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About Me</motion.b> and
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Languages</motion.b>{" "}
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="infoBox"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="infoContent">
            <p>
              Growing up I always had a curiosity about learning how things
              worked. I joined the Air Force after high school and moved into a
              career in power generation. Learning how electricity, engines, and
              controls worked fueled my curiosity.
            </p>{" "}
            <br />
            <p>
              My years in the Air Force have taught me importance of teamwork,
              effective communication, leadership, and relentless dedication to
              achieving success on a daily basis. My passion for understanding
              complex systems extends seamlessly into my present role as a
              software developer, where I am currently engaged in ongoing
              education at Emerging Digital Academy in Fargo, ND.
            </p>{" "}
            <br />
            <p>
              Each day, I embrace the opportunity to continuously expand my
              knowledge of software engineering and gain insights of how the
              various pieces come together in the complex puzzle of software
              engineering. This curiosity extends into my personal life where I
              enjoy reading books, building new ideas with my 3D printer, and
              recently trying to figure out the complexities of golfing.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <div className="icons">
            <FontAwesomeIcon
              icon={faJsSquare}
              className="icon"
              title="JavaScript"
            />
            Javascript
            <FontAwesomeIcon
              icon={faNode}
              className="icon"
              title="Express.js/Node.js"
            />
            Node.js
            <FontAwesomeIcon icon={faReact} className="icon" title="React" />
            React.js with redux and sagas
            <FontAwesomeIcon
              icon={faDatabase}
              className="icon"
              title="PostgreSQL"
            />
            PostgreSQL
            <FontAwesomeIcon
              icon={faCloud}
              className="icon"
              title="HTTP Requests (Axios)"
            />
            <br />
            Axios
            {/* <FontAwesomeIcon
              icon={faBell}
              className="icon"
              title="SweetAlert2"
            />
            Sweetalert2 */}
            <FontAwesomeIcon icon={faGit} className="icon" title="Git" />
            Git
            {/* <div>bcrypt.js</div>
            <div>React Redux and Sagas</div>
            <div>MaterialUI</div>
            <div>Fuse.js</div>
            <div>JQuery</div */}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
