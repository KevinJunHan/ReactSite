import React from "react";
import "./App.css";
import Degree from "./Degree";
import uow from "./Images/uow.gif";
import react from "./Images/react.png";
import { useSpring, animated, interpolate } from "react-spring";

import styled from "styled-components";

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true, name: props.btnText };
//   }

//   render() {
//     const { show } = this.state;
//     return (
//       <div>
//         <button
//           className="btnUp"
//           onClick={() => this.setState({ show: !show })}
//         >
//           {this.state.name}
//         </button>
//         {show ? (
//           <div>
//             <Degree />
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

function About() {
  const props = useSpring({
    to: [
      { opacity: 1, color: "bisque" },
      { opacity: 0.5, color: "brown" },
    ],
    from: { opacity: 1, color: "slategrey" },
  });

  return (
    <div className="aboutBox">
      <div className="textSection">
        <animated.h1 style={props} className="header">
          About me
        </animated.h1>

        <ul>
          <li className="genericText">Hi I am Kevin, I have </li>
          <li> ______________________</li>
          <Degree />
          <img className="csg" src={uow} alt="uow" />
          <li className="genericText">
            Experience with React , this site was developed with React.
          </li>
          {/* <img className="rea" src={react} alt="react" /> */}
          <li className="genericText" style={{ color: "red" }}>
            Background in design; A Multimedia & Animation (Game arts and
            design) diploma holder.
          </li>
          <li className="genericText">
            Experience developing multiple games with Unity3d
          </li>
          <li className="genericText" style={{ color: "red" }}>
            Experience with multiple software regarding design ( Adobe XDS,
            Photoshop , Maya autodesk )
          </li>
          <li className="genericText">
            A knack for learning new software and tech
          </li>
        </ul>
      </div>
      <div className="rightSection">
        <h1>Skills:</h1>
        <div className="skillsSection">
          <ul className="skills">
            <li class="box">C++</li>
            <li class="box">Java</li>
            <li class="box">HTML</li>
            <li class="box">React</li>
            <li class="box">JavaScript</li>
            <li class="box">SQL</li>
          </ul>
          <ul className="programs">
            <li class="box">Git</li>
            <li class="box">Unity3D</li>
            <li class="box">Photoshop</li>
            <li class="box">Adobe Xd</li>
            <li class="box">AD Maya</li>
            <li class="box">AD Mudbox</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
