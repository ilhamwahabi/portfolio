import React from "react";

import "./Navbar.css";

import { navLinks } from "../../urls";

export default class Navbar extends React.PureComponent {
  state = {
    scrollClass: "",
    scrolledHeight: 0
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY > this.state.scrolledHeight) {
      this.setState({ scrollClass: "navbar__hide" });
    } else {
      this.setState({ scrollClass: "" });
    }

    this.setState({ scrolledHeight: window.scrollY });
  };

  renderLink = () => {
    return navLinks.map(({ label, link }) => (
      <a
        className={`footer__link-${label}`}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        key={label}
      >
        <p>{label}</p>
      </a>
    ));
  };

  render() {
    return (
      <nav className={`navbar ${this.state.scrollClass}`}>
        <div className="navbar__row">
          <p className="navbar__logo">Amazing Things</p>
          <div className="navbar__options">{this.renderLink()}</div>
        </div>
      </nav>
    );
  }
}
