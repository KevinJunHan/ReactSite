import { React } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Home from "./Home";
import HireMe from "./HireMe";
import { Modal } from "react-modal";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App content">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/ReactSite" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/hireme" component={HireMe} />
					<div></div>
				</Switch>
			</div>
			<div className="footer">
				<div>
					<h2 className="genericText" style={{ color: "rgb(97, 97, 97)" }}>
						Kevin Jun Han
					</h2>
				</div>
			</div>
		</Router>
	);
}

// function Home() {
//   return <h1 className="header"> Welcome </h1>;
// }

export default App;
