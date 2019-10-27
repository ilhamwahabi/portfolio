import React from "react";

import "./Navbar.css";

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

  render() {
    return (
      <nav className={`navbar ${this.state.scrollClass}`}>
        <div className="navbar__row">
          <p className="navbar__logo">Amazing Things</p>
          <div className="divider5"></div>
          <div className="navbar__options">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iwgx.github.io"
            >
              <p>About Me</p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1m0MwAYj3GLWRCuFUzzAHQqXabSB6cNul/view"
            >
              <p>My CV</p>
            </a>
          </div>
          <div className="divider"></div>
        </div>
      </nav>
    );
  }
}
