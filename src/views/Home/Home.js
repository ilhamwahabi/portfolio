import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Desc from '../../components/Desc/Desc'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'

import './Home.css'

export default class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header />
        <Desc />
        <Footer />
      </React.Fragment>
    )
  }
}