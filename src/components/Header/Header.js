import React from 'react'

import './Header.css'

export default class Header extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__content">
            <div className="header__main">
              <h1 className="header__title">Amazing Things</h1>
              <p className="header__subtitle">by <span className="header__name">Ilham Wahabi</span></p>
            </div>
          </div>
          <div className="header__divider">
            <div className="header__img"></div>
          </div>
        </header>
        </React.Fragment>
      )
    }
  }
  // <div className="mockup"></div>