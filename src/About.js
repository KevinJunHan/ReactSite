import React from "react";
import "./App.css";
import Degree from "./Degree";
import uow from "./Images/uow.gif";
import react from "./Images/react.png";
import { useSpring, animated, interpolate } from "react-spring";
import Highlighter from "react-highlight-words";

import styled from "styled-components";

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
					<li className="genericText" title="Kevin is my name">
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["kevin"]}
							autoEscape={true}
							textToHighlight="Hi I am Kevin, I have"
						/>
						<hr />
					</li>

					<Degree />
					{/* <img className="csg" src={uow} alt="uow" /> */}
					<li className="genericText">
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["react"]}
							autoEscape={true}
							textToHighlight="Experience with React , this site was developed with React."
						/>
					</li>

					<li className="genericText" style={{ color: "red" }}>
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["background in design"]}
							autoEscape={true}
							textToHighlight="Background in design; A Multimedia & Animation (Game arts and
            design) diploma holder."
						/>
					</li>
					<li className="genericText">
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["unity3d"]}
							autoEscape={true}
							textToHighlight="Experience developing multiple games with Unity3d."
						/>
					</li>

					<li className="genericText" style={{ color: "red" }}>
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["software", "design"]}
							autoEscape={true}
							textToHighlight="Experience with multiple software regarding design ( XD,
						Photoshop , Maya etc )"
						/>
					</li>

					<li className="genericText">
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={["software", "tech"]}
							autoEscape={true}
							textToHighlight="A knack for learning new software and tech"
						/>
					</li>
				</ul>
			</div>
			<div className="rightSection">
				<h1>Skills:</h1>
				<div className="skillsSection">
					<ul className="skills">
						<li class="box" title="This site was created with react!">
							React
						</li>
						<li class="box">C++</li>
						<li class="box">Java</li>
						<li class="box">HTML</li>
						<li class="box">JavaScript</li>
						<li class="box">SQL</li>
					</ul>
					<ul className="programs">
						<li class="box" title="Used for Software Version Control">
							Git
						</li>
						<li class="box" title="Used for game developing">
							Unity3D
						</li>
						<li class="box" title="Used for design work">
							Photoshop
						</li>
						<li class="box" title="Used for wire framing">
							Adobe Xd
						</li>
						<li class="box" title="3D modelling">
							AD Maya
						</li>
						<li class="box" title="Advance 3D modelling">
							AD Mudbox
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;
