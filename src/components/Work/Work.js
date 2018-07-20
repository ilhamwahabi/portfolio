import React from 'react'

import './Work.css'

export default class Work extends React.Component {
  render(){
    return (
      <main className="work">
        <div className="divider"></div>      
        <div className="work__img">
          <img src="https://puu.sh/Ay8Oc/7f42559378.png" alt="App Home" />
        </div>
        <h1 className="work__title">Millenium Hangman</h1>
        <h3 className="work__category">Web Game</h3>
        <p className="work__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum facere nesciunt minima voluptates at aliquid soluta adipisci sunt necessitatibus?        
        </p>
        <div className="divider"></div>
        <button className="work__btn">TAKE A LOOK</button>
        <div className="divider"></div>        
      </main>
    )
  }
}
