import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./App.css";
import { useSpring, animated, interpolate } from "react-spring";

function Home() {
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
        {" "}
        Welcome{" "}
      </animated.h1>
    </div>
  );
}

export default Home;
