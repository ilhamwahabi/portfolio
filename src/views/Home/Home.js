import React, { Fragment } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Desc from '../../components/Desc/Desc'
import Work from '../../components/Work/Work'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => (
  <Fragment>
    <Navbar />
    <Header />
    <Desc />
    <Work />
    <Footer />
  </Fragment>
)

export default Home;