import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, interpolate } from "react-spring";
import Form from "./Form.js";

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
		<div style={{ width: "400px" }}>
			<animated.h1 style={props} className="header">
				Hire Me
			</animated.h1>
			<h2 style={{ paddingLeft: "40px" }} className="genericText">
				Connect with me here or @
				<span style={{ color: "red" }}> KevinJunHan@outlook.com </span>
			</h2>
			<Form></Form>
		</div>
	);
}

export default HireMe;
