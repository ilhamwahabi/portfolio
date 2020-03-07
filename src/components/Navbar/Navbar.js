import React from "react";

import "./Navbar.css";

import { navLinks } from "../../urls";

export default class Navbar extends React.PureComponent {
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
      <nav className="navbar">
        <div className="navbar__row">
          <p className="navbar__logo">Amazing Things</p>
          <div className="navbar__options">{this.renderLink()}</div>
        </div>
      </nav>
    );
  }
}
