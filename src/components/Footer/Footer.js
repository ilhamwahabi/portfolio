import React from "react";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { github, facebook, twitter, linkedin } = {
    github: "https://github.com/iwgx",
    facebook: "https://www.facebook.com/wahabi.gx",
    twitter: "https://twitter.com/ilhamwahabigx",
    linkedin: "https://www.linkedin.com/in/ilham-wahabi"
  };

  return (
    <footer className="footer">
      <div className="divider1"></div>
      <p className="footer__copy">
        &copy; {currentYear} Ilham Wahabi.
        <br /> All Rights Reserved.
      </p>
      <div className="divider3"></div>
      <div className="footer__link">
        <a
          className="footer__link-github"
          target="_blank"
          rel="noopener noreferrer"
          href={github}
        >
          <p>Github</p>
        </a>
        <a
          className="footer__link-gitlab"
          target="_blank"
          rel="noopener noreferrer"
          href={facebook}
        >
          <p>Facebook</p>
        </a>
        <a
          className="footer__link-twitter"
          target="_blank"
          rel="noopener noreferrer"
          href={twitter}
        >
          <p>Twitter</p>
        </a>
        <a
          className="footer__link-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          href={linkedin}
        >
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="divider1"></div>
    </footer>
  );
};

export default Footer;
