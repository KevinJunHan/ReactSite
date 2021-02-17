import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, interpolate } from "react-spring";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, name: props.btnText };
  }

  render() {
    // For hire button
    const styles = {
      background: "red",
      borderRadius: 3,
      width: 160,
      padding: "10px 20px",

      color: "bisque",
      outline: "none",
      border: "none",
      cursor: "pointer",
    };

    const { show } = this.state;
    return (
      <div>
        <motion.button
          style={styles}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1, x: "0px", y: "10px" }}
          className="btnUp"
          onClick={() => this.setState({ show: !show })}
        >
          {this.state.name}
        </motion.button>

        {show ? <div>Email: KevinJunHan@outlook.com</div> : null}
      </div>
    );
  }
}

function HireMe() {
  const props = useSpring({
    to: [
      { opacity: 1, color: "bisque" },
      { opacity: 0.5, color: "brown" },
    ],
    from: { opacity: 1, color: "slategrey" },
  });

  return (
    <div>
      <animated.h1 style={props} className="header">
        Hire Me
      </animated.h1>
      <div className="HireContainer">
        <div className="HCTop">
          <p>Hire me as a front end developer / software engineer today!</p>
          <div className="HCBtm">
            <Toggle btnText="Hire me" />
            {/* <motion.button
              style={styles}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1, x: "0px", y: "10px" }}
            >
              Hire Me
            </motion.button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
