import React, { Fragment } from "react";
import axios from "axios";

import credentials from "../../credentials";
import "./Work.css";

export default class Work extends React.Component {
  state = {
    works: []
  };

  componentWillMount() {
    axios({
      method: "get",
      url:
        "https://sheets.googleapis.com/v4/spreadsheets/1revH4OXNXMVTReYsHjZpHJnNHkNZdZ8YrWoFRg5lpjk/values/Sheet1!A2:H",
      params: {
        key: credentials.apiKey
      }
    })
      .then(res => this.setState({ works: res.data.values }))
      .catch(err => console.log(err));
  }

  getTheme(workIndex) {
    switch (workIndex % 2) {
      case 1:
        return "cyan";
      case 0:
        return "sky";
      default:
        return "";
    }
  }

  renderCollabWith(collab) {
    if (!collab || collab === "") return;

    return (
      <Fragment>
        <p className="work__collab-title">In Collaboration with:</p>
        <p className="work__collab">{collab}</p>
      </Fragment>
    );
  }

  renderButtonGroup(repo, view) {
    return (
      <div className="work__btn-group">
        {view === "" ? null : (
          <a target="_blank" href={view}>
            <button className="work__btn work__btn-view">TAKE A LOOK</button>
          </a>
        )}
        {repo === "" ? null : (
          <a target="_blank" href={repo}>
            <button className="work__btn work__btn-repo">PEEK REPO</button>
          </a>
        )}
      </div>
    );
  }

  renderWork(work, index) {
    return (
      <main key={index} className={`work ${this.getTheme(index + 1)}`}>
        <div className="divider"></div>
        <div className="work__img">
          <img src={work[1]} alt="App Home" />
        </div>
        <h1 className="work__title">{work[0]}</h1>
        <h3 className="work__category">{work[3]}</h3>
        <p className="work__desc">{work[2]}</p>
        {this.renderCollabWith(work[7])}
        <div className="divider"></div>
        {this.renderButtonGroup(work[4], work[5])}
        <div className="divider"></div>
      </main>
    );
  }

  render() {
    const { works } = this.state;

    return (
      <div className="works">
        {works.map((work, index) => this.renderWork(work, index))}
      </div>
    );
  }
}
