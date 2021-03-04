import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, interpolate } from "react-spring";
import Form from "./Form.js";
import { Alert, Badge, Button } from "react-bootstrap";

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
			<Alert variant="success" style={{ width: "100%" }}>
				Hi there! Let me know <strong>what's on your mind</strong>
			</Alert>
			<div style={{ width: "410px" }}>
				<animated.h1 style={props} className="header">
					Hire Me
				</animated.h1>
				<h2 style={{ paddingLeft: "40px" }} className="genericText">
					Connect with me here or @
					<span style={{ color: "red" }}> KevinJunHan@outlook.com </span>
					<p style={{ paddingTop: "18px" }}>
						{/* Current Status:{" "}
						<span style={{ color: "green" }}>Happily employed</span> */}
						<p
							style={{
								paddingTop: "10px",
								fontSize: "12px",
								color: "lightBlue",
							}}
						>
							Feel free to message me any queries you may have
						</p>
					</p>
				</h2>
				<Form></Form>
			</div>
		</div>
	);
}

export default HireMe;
