import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,urlI,urlD,author,date} = this.props;
    return (
      <div className='ritik'>
          <div className="card" style={{width: "18rem", margin: "8px 0"}}>
            <img src={urlI} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={urlD} target="_blank" className="btn btn-primary">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
