import Head from 'next/head'
import axios from "axios";

const { github, twitter, linkedIn, reddit } = {
  github: "https://github.com/iwgx",
  twitter: "https://twitter.com/ilhamwahabigx",
  linkedIn: "https://www.linkedin.com/in/ilham-wahabi",
  reddit: "https://www.reddit.com/user/ilhamwahabi"
};

export const navLinks = [];

export const headerLinks = [
  { text: "see more on", label: "Github", link: github },
  { text: "let's talk on", label: "Twitter", link: twitter },
  { text: "discuss on", label: "Reddit", link: reddit },
  { text: "find me on", label: "LinkedIn", link: linkedIn }
];

export const footerLinks = {
  github,
  twitter,
  reddit,
  linkedIn
};

const Button = ({ type, url, label }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <button className={`work__btn work__btn-${type}`}>{label}</button>
    </a>
  );
};

export async function getStaticProps() {
  const response = await axios({
    url:
      "https://sheets.googleapis.com/v4/spreadsheets/1revH4OXNXMVTReYsHjZpHJnNHkNZdZ8YrWoFRg5lpjk/values/Sheet1!A2:H",
    params: {
      key: process.env.GOOGLE_API_KEY,
    },
  })

  return {
    props: {
      works: response.data.values
    }
  }
}

export default function Home({ works }) {
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

  const currentYear = new Date().getFullYear();

  const renderFooterLink = () => {
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

  function getTheme(workIndex) {
    switch (workIndex % 2) {
      case 1:
        return "sky";
      case 0:
        return "cyan";
      default:
        return "";
    }
  }

  function renderCollabWith(collab) {
    if (!collab) return;

    return (
      <>
        <p className="work__collab-title">In Collaboration with:</p>
        <p className="work__collab">{collab}</p>
      </>
    );
  }

  function renderButtonGroup(repo, live) {
    return (
      <div className="work__btn-group">
        {live && <Button type="live" url={live} label={"TAKE A LOOK"} />}
        {repo && <Button type="repo" url={repo} label={"PEEK REPO"} />}
      </div>
    );
  }

  return (
    <div className="App">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:url" content="https://portfolio.iwgx.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amazing Things" />
        <meta
          property="og:image"
          content="https://i.ibb.co/FbrFJvX/amazing-things.png"
        />
        <meta
          name="og:description"
          content="Here is bunch of my work which mostly front end stuff"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400"
          rel="stylesheet"
        />
        <script async defer data-domain="portfolio.iwgx.io" src="https://plausible.io/js/plausible.js" />
        <title>Amazing Things by Ilham Wahabi</title>
      </Head>

      <nav className="navbar">
        <div className="navbar__row">
          <p className="navbar__logo">Amazing Things</p>
          <div className="navbar__options">
            {
              navLinks.map(({ label, link }) => (
                <a
                  className={`footer__link-${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  key={label}
                >
                  <p>{label}</p>
                </a>
              ))
            }
          </div>
        </div>
      </nav>

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
          <svg
            className="chevron-down"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </header>

      <section id="desc" className="desc">
        <h1 className="desc__title">What I have been up to.</h1>
        <p className="desc__subtitle">
          Here are bunch of my work, which mostly front end stuff
        </p>
        <p className="desc__subtitle">
          Although just selected project that featured here
        </p>
        <p className="desc__subtitle">
          Got something to say? Don't hesitate to send me a message :)
        </p>
      </section>

      <div className="works">
        {
          works.map((work, index) => {
            const [title, image, desc, category, repo, live, collab] = work;
        
            return (
              <main key={index} className={`work ${getTheme(index + 1)}`}>
                <div className="work__img">
                  <img src={image} alt="App Home" />
                </div>
                <h1 className="work__title">{title}</h1>
                <h3 className="work__category">{category}</h3>
                <p className="work__desc">{desc}</p>
                {renderCollabWith(collab)}
                {renderButtonGroup(repo, live)}
              </main>
            );
          })
        }
      </div>

      <footer className="footer">
        <div className="footer__wrapper">
          <p className="footer__copy">
            <span>&copy; {currentYear} Ilham Wahabi.</span>
            <span> All Rights Reserved.</span>
          </p>
          <div className="footer__link">{renderFooterLink()}</div>
        </div>
      </footer>
    </div>
  )
}
