import { React } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Navb from "./Navb";
import Home from "./Home";
import HireMe from "./HireMe";
import { Modal } from "react-modal";
import Profile from "./Profile";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
				<div className="App content">
					<Navb />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/profile" component={Profile} />
						<Route path="/ReactSite" component={Home} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/hireme" component={HireMe} />
						<div></div>
					</Switch>
				</div>
				<div className="footer">
					<div>
						<h2
							className="genericText"
							style={{ color: "rgb(97, 97, 97)" }}
						>
							Kevin Jun Han
						</h2>
					</div>
				</div>
			</Container>
		</Router>
	);
}

export default App;
