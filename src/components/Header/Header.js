import React, { Fragment } from "react";

import "./Header.css";
import { headerLinks } from "../../urls";
import ChevronDown from "./ChevronDown";

const Header = () => {
  const scrollToDesc = () => {
    document.getElementById("desc").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const renderLink = () => {
    return headerLinks.map(({ text, label, link }) => (
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
              <h1 className="header__title">Awesome Projects </h1>
              <p className="header__subtitle">
                by <span className="header__name">Ilham Wahabi</span>
              </p>
              <div className="header__social">{renderLink()}</div>
            </div>
          </div>
          <div className="header__img"></div>
        </div>
        <div className="header__icon" onClick={scrollToDesc}>
          <ChevronDown />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
