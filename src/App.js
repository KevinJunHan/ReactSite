import { React } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Home from "./Home";
import HireMe from "./HireMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={About} />
					<Route path="/about" component={About} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/hireme" component={HireMe} />
				</Switch>
			</div>
		</Router>
	);
}

// function Home() {
//   return <h1 className="header"> Welcome </h1>;
// }

export default App;
