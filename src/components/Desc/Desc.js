import React from 'react'

import './Desc.css'

export default class Desc extends React.Component {
  render(){
    return (
      <section className="desc">
        <h1 className="desc__title">What I've been up to.</h1>
        <p className="desc__subtitle">
          Here's bunch of my work which mostly front end stuff
        </p>
        <p className="desc__subtitle">
          Some project is not shown for a reason
        </p>
        <p className="desc__subtitle">
          Something to say? Dont hesitate to contact me :) 
        </p>
      </section>
    )
  }
}