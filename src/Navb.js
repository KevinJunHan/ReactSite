import React from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./Images/logo.png";
import user from "./Images/user.png";
import folder from "./Images/folder.png";
import contract from "./Images/contract.png";
import { render } from "@testing-library/react";
import { motion } from "framer-motion";
import {
	Nav,
	Navbar,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";

class Navb extends React.Component {
	constructor(props) {
		super(props);
		this.state = { nam: "" };
		this.toggleDesc = this.toggleDesc.bind(this);
	}

	toggleDesc(props) {
		const name = props;
		this.setState({ nam: name }, () => console.log(this.state.nam));
	}

	render() {
		const navStyle = {
			color: "grey",
		};

		const nam = this.state.nam;

		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					position: "sticky",
					top: 0,
					zIndex: 2,
				}}
			>
				<div>
					<Navbar
						bg="light"
						variant="light"
						expand="lg"
						style={{ height: "55px", zIndex: "2" }}
					>
						<h1 className="brand">
							<span className="animateK">K</span>ev
							<span className="animateI">i</span>n
						</h1>
						{/* <Navbar.Brand href="/ReactSite" >KEVIN</Navbar.Brand> */}
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/Profile">Profile</Nav.Link>
								<Nav.Link href="/Portfolio">Portfolio</Nav.Link>
								<Nav.Link href="/HireMe">Hire Me</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
				<div>
					<nav>
						<ul className="nav-links">
							<NavLink
								className="abt"
								style={navStyle}
								to="/Profile"
								activeClassName="selected"
								activeStyle={{
									animationName: "quirky",
									animationTimingFunction: "ease",
									animationIterationCount: "infinite",
									animationDuration: "0.5s",
									animationDirection: "alternate-reverse",
									border: "2px solid #EB3A53",
									fontWeight: "bold",
									color: "#EB3A53",
								}}
							>
								<li className="c">
									Profile
									<img className="user" src={user} alt="user" />
								</li>
							</NavLink>
							<NavLink
								className="portfolio"
								style={navStyle}
								to="/Portfolio"
								activeClassName="selected"
								activeStyle={{
									animationName: "quirky",
									animationTimingFunction: "ease",
									animationIterationCount: "infinite",
									animationDuration: "0.5s",
									animationDirection: "alternate-reverse",
									border: "2px solid #EB3A53",
									fontWeight: "bold",
									color: "#EB3A53",
								}}
							>
								<li className="c">
									Portfolio
									<img className="folder" src={folder} alt="folder" />
								</li>
							</NavLink>

							{/* <li>
            Hire_Me
            <img className="contract" src={contract} alt="contract" />
          </li> */}
							<NavLink
								className="hireme"
								style={navStyle}
								to="/HireMe"
								activeClassName="selected"
								activeStyle={{
									animationName: "quirky",
									animationTimingFunction: "ease",
									animationIterationCount: "infinite",
									animationDuration: "0.5s",
									animationDirection: "alternate-reverse",
									border: "2px solid #EB3A53",
									fontWeight: "bold",
									color: "#EB3A53",
								}}
							>
								<li
									className="c"
									style={{
										color: "",
									}}
								>
									Hire Me
									<img
										className="contract"
										src={contract}
										alt="contract"
									/>
								</li>
							</NavLink>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Navb;
