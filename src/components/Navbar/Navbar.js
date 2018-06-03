import React from 'react'

import './Navbar.css'

export default class Navbar extends React.Component {
  state = {
    scrollClass: '',
    scrolledHeight: 0
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var minScroll = window.innerHeight * 1;
  
    if (
      window.scrollY > this.state.scrolledHeight
    ) {
      this.setState({ scrollClass: 'navbar__hide' })      
    } else {
      this.setState({ scrollClass: '' })
    }

    this.setState({ scrolledHeight: window.scrollY})
  }

  render(){
    return (
      <nav className={`navbar ${this.state.scrollClass}`}>
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