import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated, interpolate } from "react-spring";
import Form from "./Form.js";
import { Alert, Badge, Button } from "react-bootstrap";
import hire from "./Images/hire.png";

function AlertDismissible() {
	const [show, setShow] = useState(false);

	return (
		<>
			<Alert
				style={{ marginBottom: "0px", width: "100%" }}
				show={show}
				variant="light"
			>
				<Alert.Heading>Notes:</Alert.Heading>
				<p>
					Employment Status:
					<strong>
						<nobr style={{ color: "red" }}>Employed, not looking</nobr>
					</strong>
				</p>
				<p>
					Location: <b>Singapore</b>
				</p>
				<hr />
				<div className="d-flex ">
					<Button onClick={() => setShow(false)} variant="outline-success">
						Collapse all
					</Button>
				</div>
			</Alert>

			{!show && (
				<Button
					style={{ backgroundColor: "red" }}
					onClick={() => setShow(true)}
				>
					?
				</Button>
			)}
		</>
	);
}

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
			{ opacity: 0.5, color: "#EB3A53" },
		],
		from: { opacity: 1, color: "slategrey" },
	});

	return (
		<div>
			<Alert variant="info" style={{ width: "100%", marginBottom: "0px" }}>
				Hi there! Let me know <strong>what's on your mind </strong>
			</Alert>
			<AlertDismissible />

			<div style={{ width: "410px" }}>
				<animated.h1 style={props} className="header">
					Hire Me
				</animated.h1>
				<img
					className="hire"
					src={hire}
					alt="hire"
					style={{ width: "300px", height: "200px" }}
				/>
				<h2 style={{ paddingLeft: "40px" }} className="genericText">
					Connect with me here or @
					<span style={{ color: "red" }}> KevinJunHan@outlook.com </span>
					<p style={{ paddingTop: "18px" }}>
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
