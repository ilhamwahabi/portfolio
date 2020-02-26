import React, { Fragment } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Header.css";

const links = [
  { text: "see more on", label: "Github", link: "https://github.com/iwgx" },
  {
    text: "let's talk on",
    label: "Twitter",
    link: "https://twitter.com/ilhamwahabigx"
  },
  {
    text: "discuss on",
    label: "Reddit",
    link: "https://www.reddit.com/user/ilhamwahabi"
  },
  {
    text: "add me on",
    label: "Facebook",
    link: "https://www.facebook.com/wahabi.gx"
  }
];

const Header = () => {
  const renderLink = () => {
    return links.map(({ text, label, link }) => (
      <a target="_blank" rel="noopener noreferrer" href={link} key={label}>
        <p>
          {text} <span>{label}</span>
        </p>
      </a>
    ));
  };

  return (
    <Fragment>
      <header className="header">
        <div className="header__row">
          <div className="header__content">
            <div className="header__main">
              <h1 className="header__title">Awesome Projects</h1>
              <p className="header__subtitle">
                by <span className="header__name">Ilham Wahabi</span>
              </p>
              <div className="header__social">{renderLink()}</div>
            </div>
          </div>
          <div className="header__img"></div>
        </div>
        <div className="header__icon">
          <AnchorLink href="#desc" offset={() => window.outerHeight * 0.25}>
            <i className="material-icons md-48">keyboard_arrow_down</i>
          </AnchorLink>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
