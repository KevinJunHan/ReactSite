import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./App.css";
import { useSpring, animated, interpolate } from "react-spring";
import ReactPlayer from "react-player";

function Portfolio() {
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
				Porfolio
			</animated.h1>
			<div className="players">
				<div className="playerOnLeft">
					<h1 className="genericText" style={{ color: "dodgerblue" }}>
						Games developed:
					</h1>
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=tqNft0iUPHY"
					/>
				</div>
				<div className="playerOnRight">
					<h1 className="genericText">FYP (Mobile App)</h1>
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=FiFWPWR3mLs"
					/>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
