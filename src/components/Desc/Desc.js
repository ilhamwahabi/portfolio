import React from 'react'

import './Desc.css'

export default class Desc extends React.Component {
  render(){
    return (
      <section className="desc">
        <h1 className="desc__title">What I've been up to.</h1>
        <p className="desc__subtitle">
          Here's a bunch of my work. Mostly front end things.
        </p>
        <p className="desc__subtitle">
          I hope you like what i had done :) 
        </p>
      </section>
    )
  }
}