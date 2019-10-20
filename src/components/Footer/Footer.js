import React from "react";

import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="divider1"></div>
    <p className="footer__copy">
      &copy; 2018 Ilham Wahabi.
      <br /> All Rights Reserved.
    </p>
    <div className="divider3"></div>
    <div className="footer__link">
      <a
        className="footer__link-github"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/iwgx"
      >
        <p>Github</p>
      </a>
      <a
        className="footer__link-gitlab"
        target="_blank"
        rel="noopener noreferrer"
        href="https://gitlab.com/iwgx"
      >
        <p>Gitlab</p>
      </a>
      <a
        className="footer__link-twitter"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/ilhamwahabigx"
      >
        <p>Twitter</p>
      </a>
      <a
        className="footer__link-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/ilham-wahabi-aa1479131/"
      >
        <p>LinkedIn</p>
      </a>
    </div>
    <div className="divider1"></div>
  </footer>
);

export default Footer;
