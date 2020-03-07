import React from "react";

import "./Footer.css";
import { footerLinks } from "../../urls";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderLink = () => {
    return Object.entries(footerLinks).map(([name, link]) => (
      <a
        className={`footer__link-${name}`}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        key={name}
      >
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </a>
    ));
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copy">
          <span>&copy; {currentYear} Ilham Wahabi.</span>
          <span> All Rights Reserved.</span>
        </p>
        <div className="footer__link">{renderLink()}</div>
      </div>
    </footer>
  );
};

export default Footer;
