const { github, twitter, facebook, linkedIn, resume, reddit } = {
  github: "https://github.com/iwgx",
  twitter: "https://twitter.com/ilhamwahabigx",
  facebook: "https://www.facebook.com/wahabi.gx",
  linkedIn: "https://www.linkedin.com/in/ilham-wahabi",
  reddit: "https://www.reddit.com/user/ilhamwahabi",
  resume:
    "https://drive.google.com/file/d/1m0MwAYj3GLWRCuFUzzAHQqXabSB6cNul/view"
};

export const navLinks = {
  linkedIn,
  resume
};

export const headerLinks = [
  { text: "see more on", label: "Github", link: github },
  { text: "let's talk on", label: "Twitter", link: twitter },
  { text: "discuss on", label: "Reddit", link: reddit },
  { text: "add me on", label: "Facebook", link: facebook }
];

export const footerLinks = {
  github,
  twitter,
  facebook,
  linkedIn
};
