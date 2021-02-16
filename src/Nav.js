import React from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./Images/logo.png";
import user from "./Images/user.png";
import folder from "./Images/folder.png";
import contract from "./Images/contract.png";
import { render } from "@testing-library/react";

function hello() {
  return alert("Clicked");
}

class Nav extends React.Component {
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
      <nav>
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <ul className="nav-links">
          <NavLink
            className="abt"
            onClick={() => this.toggleDesc("lol")}
            style={navStyle}
            to="/About"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "bisque",
            }}
          >
            <li>
              About_Me
              <img className="user" src={user} alt="user" />
            </li>
          </NavLink>
          <NavLink
            className="abt"
            style={navStyle}
            to="/Portfolio"
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "bisque",
            }}
          >
            <li>
              Portfolio
              <img className="folder" src={folder} alt="folder" />
            </li>
          </NavLink>
          <li>
            Hire_Me
            <img className="contract" src={contract} alt="contract" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
