import React from 'react'

import './Navbar.css'

export default class Navbar extends React.Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar__row">
          <p className="navbar__logo">Amazing Things</p>
          <div className="divider5"></div>          
          <div className="navbar__options">
            <p>Profile</p>
            <p>Filter</p>
          </div>
          <div className="divider"></div>          
        </div>
      </nav>
    )
  }
}