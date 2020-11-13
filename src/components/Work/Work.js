import React from "react";
import axios from "axios";

import "./Work.css";

const Button = ({ type, url, label }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <button className={`work__btn work__btn-${type}`}>{label}</button>
    </a>
  );
};

export default class Work extends React.PureComponent {
  state = {
    works: [],
  };

  componentWillMount() {
    axios({
      url:
        "https://sheets.googleapis.com/v4/spreadsheets/1revH4OXNXMVTReYsHjZpHJnNHkNZdZ8YrWoFRg5lpjk/values/Sheet1!A2:H",
      params: {
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    })
      .then((res) => this.setState({ works: res.data.values }))
      .catch((err) => console.log(err));
  }

  getTheme(workIndex) {
    switch (workIndex % 2) {
      case 1:
        return "sky";
      case 0:
        return "cyan";
      default:
        return "";
    }
  }

  renderCollabWith(collab) {
    if (!collab) return;

    return (
      <>
        <p className="work__collab-title">In Collaboration with:</p>
        <p className="work__collab">{collab}</p>
      </>
    );
  }

  renderButtonGroup(repo, live) {
    return (
      <div className="work__btn-group">
        {live && <Button type="live" url={live} label={"TAKE A LOOK"} />}
        {repo && <Button type="repo" url={repo} label={"PEEK REPO"} />}
      </div>
    );
  }

  renderWork = (work, index) => {
    const [title, image, desc, category, repo, live, collab] = work;

    return (
      <main key={index} className={`work ${this.getTheme(index + 1)}`}>
        <div className="work__img">
          <img src={image} alt="App Home" />
        </div>
        <h1 className="work__title">{title}</h1>
        <h3 className="work__category">{category}</h3>
        <p className="work__desc">{desc}</p>
        {this.renderCollabWith(collab)}
        {this.renderButtonGroup(repo, live)}
      </main>
    );
  };

  render() {
    const { works } = this.state;

    return <div className="works">{works.map(this.renderWork)}</div>;
  }
}
