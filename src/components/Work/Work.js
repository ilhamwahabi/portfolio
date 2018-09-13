import React, { Fragment } from 'react'
import axios from 'axios'

import credentials from '../../credentials'
import './Work.css'

export default class Work extends React.Component {
  state = {
    works: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1revH4OXNXMVTReYsHjZpHJnNHkNZdZ8YrWoFRg5lpjk/values/Sheet1!A2:H',
      params: {
        key: credentials.apiKey
      }
    }).then((res) => this.setState({ works: res.data.values }))
      .catch((err) => console.log(err))
  }

  render(){
    return (
      <div className="works">
      { 
        this.state.works.map((work, i) => {
          return (
            <main key={i} className="work">
              <div className="divider"></div>      
              <div className="work__img">
                <img src={ work[1] } alt="App Home" />
              </div>
              <h1 className="work__title">{ work[0] }</h1>
              <h3 className="work__category">{ work[3] }</h3>
              <p className="work__desc">{ work[2] }</p>
              {
                !work[7] || work[7] === '' ? null : 
                  <Fragment> 
                    <p className="work__collab-title">In Collaboration with:</p>
                    <p className="work__collab">{ work[7] }</p>
                  </Fragment>
              }
              <div className="divider"></div>
              <div className="work__btn-group">
                { work[5] === '' ? null :
                  <a target="_blank" href={ work[5] }>
                    <button className="work__btn work__btn-view">TAKE A LOOK</button>
                  </a>
                } 
                { work[4] === '' ? null : 
                  <a target="_blank" href={ work[4] }>
                    <button className="work__btn work__btn-repo">PEEK REPO</button>
                  </a> 
                }
              </div>
              <div className="divider"></div>        
            </main>
          )
        })
      }
      </div>
    )
  }
}
