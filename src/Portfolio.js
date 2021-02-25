import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./App.css";
import { useSpring, animated, interpolate } from "react-spring";
import ReactPlayer from "react-player";
import Form from "./Form";

function useWindowSize() {
	const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
	useEffect(() => {
		const handleResize = () => {
			setSize([window.innerHeight, window.innerWidth]);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return size;
}

function Portfolio() {
	const [height, width] = useWindowSize();

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
			<div className={width > 843 ? "players" : "players2"}>
				<div className="playerOnLeft">
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=tqNft0iUPHY"
					/>
					<h1 className="genericText" style={{ color: "blue" }}>
						Games programmed:
					</h1>
					<ol className="geneList">
						<li>SnowGo [2D Platform game] </li>
						<li>Space Survivor [Puzzle solving game] </li>
						<li>Phrenzy [2D RPG]</li>
						<li>Pizza Slice [One button game]</li>
					</ol>
				</div>
				<div className="playerOnRight">
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=FiFWPWR3mLs"
					/>
					<h1 className="genericText" style={{ color: "blue" }}>
						FYP TrapLearn (Mobile App)
						<ol className="geneList">
							<li>
								Teaches users trapdoor{" "}
								<span>
									<nobr>knapsack cryptosystem</nobr>
								</span>
							</li>
							<li>Broken into 5 chapters</li>
							<li>End of chapter quiz</li>
							<li>Hands-on simulator</li>
							<li>Achievement system</li>
						</ol>
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
