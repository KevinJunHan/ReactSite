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

	const propsMain = useSpring({
		to: [{ opacity: 1 }],
		from: { opacity: 0 },
		delay: 1100,
	});

	const propsMain2 = useSpring({
		to: [{ opacity: 1 }],
		from: { opacity: 0 },
		delay: 1600,
	});

	const propsMain3 = useSpring({
		to: [{ opacity: 1 }],
		from: { opacity: 0 },
		delay: 2000,
	});

	return (
		<div>
			<animated.h1 style={props} className="header">
				Porfolio
			</animated.h1>
			<animated.div
				style={propsMain}
				className={width > 843 ? "players" : "players2"}
			>
				<div className="playerOnLeft">
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=tqNft0iUPHY"
					/>
					<animated.h1 className="genericText" style={propsMain2}>
						Games programmed:
					</animated.h1>
					<animated.ol className="geneList" style={propsMain3}>
						<li>SnowGo [2D Platform game] </li>
						<li>Space Survivor [Puzzle solving game] </li>
						<li>Phrenzy [2D RPG]</li>
						<li>Pizza Slice [One button game]</li>
					</animated.ol>
				</div>
				<div className="playerOnRight">
					<ReactPlayer
						width="400px"
						height="300px"
						muted="true"
						playing="true"
						url="www.youtube.com/watch?v=FiFWPWR3mLs"
					/>
					<animated.h1 className="genericText" style={propsMain2}>
						FYP TrapLearn (Mobile App)
						<animated.ol className="geneList" style={propsMain3}>
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
						</animated.ol>
					</animated.h1>
				</div>
			</animated.div>
		</div>
	);
}

export default Portfolio;
