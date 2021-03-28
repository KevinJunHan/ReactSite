import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import { useSpring, animated, interpolate } from "react-spring";
import background from "./Images/background.jpg";
import background2 from "./Images/background2.jpg";
import styled from "styled-components";
import {
	ListGroup,
	Tab,
	Fade,
	Collapse,
	Button,
	Alert,
	Container,
	Row,
	Col,
	Badge,
	Card,
} from "react-bootstrap";
import html from "./Images/html.png";

import home from "./Images/home.png";
import user from "./Images/user.png";

function loadingIn() {
	return new Promise((resolve) => setTimeout(resolve, 1200));
}

function Profile() {
	const [open, setOpen] = useState(false);

	const [role, setRole] = useState("Game Development");
	const [theColor, setTheColor] = useState("#EB3A53");
	const [isLoading, setLoading] = useState(false);
	const handleClick = () => setLoading(true);

	const handleScroll = (event) => {
		console.log("Scrolling", window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const props = useSpring({
		to: [
			{ opacity: 1, color: "bisque" },
			{ opacity: 0.5, color: "brown" },
		],
		from: { opacity: 1, color: "slategrey" },
	});

	useEffect(() => {
		if (isLoading) {
			loadingIn().then(() => {
				setLoading(false);
			});
		}
	}, [isLoading]);

	useEffect(() => {
		setTimeout(
			() =>
				setRole((prevRole) => {
					if (prevRole == "Game Development")
						return "Software Development";

					if (prevRole != "Game Development") return "Game Development";
				}),
			3000
		);
	}, [role]);

	return (
		<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
			<div
				style={{
					position: "-webkit-sticky",
					position: "sticky",
					top: "0",
					zIndex: 2,
				}}
			></div>
			<Row>
				<Col lg={12} className="AboutMeIntroBox">
					<p className="IntroText">
						Hi I am <span className="IntroTextJump"> Kevin</span> !
					</p>
					<p className="IntroText">
						I <span className="shine">mainly</span> do
					</p>
					<p className="IntroText" style={{ color: theColor }}>
						Front-End Development
					</p>
					<p className="IntroText">&</p>
					<p className="IntroText2">
						<span style={{ color: theColor }}>{role}</span>
					</p>
				</Col>
			</Row>

			<div
				className="AboutMeEduBox"
				style={{
					backgroundImage: `url(${background2})`,
					backgroundSize: "cover",
					backgroundBlendMode: "darken",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Row id="E">
					<Col lg={12}>
						<p className="IntroText">
							I graduated with :
							<span className="IntroTextJump">
								Comp Science Bachelor Degree
							</span>
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<>
							<Button
								style={{ marginTop: "1vh" }}
								variant="outline-danger"
								disabled={isLoading}
								onClick={() => {
									if (!isLoading) {
										setOpen(!open);
										handleClick();
									} else {
										setOpen(!open);
									}
								}}
							>
								{isLoading ? "Loading.." : "Click Me!"}
							</Button>

							<Collapse in={open}>
								<p className="IntroText" style={{ fontSize: "3vh" }}>
									I also have a diploma in{" "}
									<span className="shine2">
										Multimedia & Animation
									</span>
								</p>
							</Collapse>
						</>
					</Col>
					<Col md={6}>
						<Alert variant="warning" className="skillz">
							About me
						</Alert>
						<div>
							<Tab.Container
								id="list-group-tabs-example"
								defaultActiveKey="#skills"
							>
								<Row>
									<Col sm={4}>
										<ListGroup>
											<ListGroup.Item action href="#skills">
												Skills
											</ListGroup.Item>
											<ListGroup.Item action href="#misc">
												Misc.
											</ListGroup.Item>
										</ListGroup>
									</Col>
									<Col sm={8}>
										<Tab.Content>
											<Tab.Pane eventKey="#skills">
												<div>
													<p
														style={{
															opacity: "0.8",
															padding: "10px",
															boxShadow: "4px 4px 2px #888888",

															backgroundColor: "white",
														}}
													>
														I am a front end developer with strong
														fundamentals in computer science and a
														design background. This website for
														example was made with ReactJS. I have
														also build &gt;
														<a href="/Portfolio">
															<nobr>multiple games</nobr>
														</a>
														&lt; , both solo and in groups using
														Unity3D.
													</p>

													<ol
														style={{
															opacity: "0.8",
															boxShadow: "4px 4px 2px #888888",

															backgroundColor: "white",
														}}
													>
														<li>Html</li>
														<li>Css</li>
														<li>JavaScript</li>
														<li>Java</li>
														<li>C++</li>
														<li>Git</li>
														<li>Unity3D</li>
														<li>Adobe Photoshop</li>
														<li>Adobe XD</li>
														<li>Maya Autodesk</li>
														<li>Maya Mudbox</li>
													</ol>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="#misc">
												<p
													style={{
														textAlign: "justify",
														opacity: "0.8",
														padding: "10px",
														boxShadow: "4px 4px 2px #888888",

														backgroundColor: "white",
													}}
												>
													When not working on anything software
													related, I like to spend my time in the
													gym to keep fit. I also enjoy listening
													to hip hop music.
												</p>
											</Tab.Pane>
										</Tab.Content>
									</Col>
								</Row>
							</Tab.Container>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Profile;
