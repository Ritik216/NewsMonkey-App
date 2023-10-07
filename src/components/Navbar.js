import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
 
  // constructor(){
  //   super();
  //   this.state={
  //     color: 'black',
  //     backgroundColor: 'white',
  //     lighttodark: 'Light Mode'
  //   }
  // }

 
  // myfunc=()=>{
  //   if(this.state.color==='black'){
  //     this.setState({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       lighttodark: 'Dark Mode Enabled'
  //     })
  //     document.body.backgroundColor=this.state.backgroundColor;
  //   }
  //   else{
  //     this.setState({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       lighttodark: 'Light Mode Enabled'

  //     })
  //     document.body.backgroundColor=this.state.backgroundColor;

  //   }
  // }
  
  render() {
    let {color,backgroundColor,lighttodark,func} = this.props;
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid" style={{color: color, backgroundColor: backgroundColor==='black'?'#27274d':'white'}}>
                <Link className="navbar-brand" to="/" style={{color: color}}>NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/" style={{color: color}}>Home</Link>
                    </li>  
                    <li className="nav-item">
                    <Link className="nav-link" to="/business" style={{color: color}}>Business</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment" style={{color: color}}>Entertainment</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/general" style={{color: color}}>General</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/health" style={{color: color}}>Health</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/science" style={{color: color}}>Science</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports" style={{color: color}}>Sports</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/technology" style={{color: color}}>Technology</Link></li>
                </ul>
                </div>
                <div className="form-check form-switch" style={{color: color,}} onClick={func}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{lighttodark}</label>
                  
                </div>
            </div>
            </nav>
            </>
    )
  }
}
