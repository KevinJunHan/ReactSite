import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./App.css";
import { useSpring, animated, interpolate } from "react-spring";
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from "react-bootstrap";

function Home() {
	const props = useSpring({
		to: [
			{ opacity: 1, color: "bisque" },
			{ opacity: 0.5, color: "brown" },
		],
		from: { opacity: 1, color: "slategrey" },
	});

	return (
		<div className="containerm">
			<div className="special">
				<animated.h1 style={props} className="header">
					Welcome
				</animated.h1>
				<div className="WelcomeContainer">
					<h2 className="genericText">
						Click on the icons above to navigate!
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Home;
