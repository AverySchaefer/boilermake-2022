import React, { Component } from "react";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="below-logo">
          <ul className="menu-titles">
            {MenuItems.map((item, index) => {
              return (
                <li>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                  {/* <a className={item.cName} href={item.url}>
                    {item.title}
                  </a> */}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
