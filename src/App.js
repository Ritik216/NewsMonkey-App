import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      color: 'black',
      backgroundColor: 'white',
      lighttodark: 'Light Mode'
    }
  }
  myfunc=()=>{
    if(this.state.color==='black'){
      this.setState({
        color: 'white',
        backgroundColor: 'black',
        lighttodark: 'Dark Mode Enabled'
      })
      // document.body.backgroundColor=this.state.backgroundColor;
    }
    else{
      this.setState({
        color: 'black',
        backgroundColor: 'white',
        lighttodark: 'Light Mode Enabled'

      })
      // document.body.backgroundColor=this.state.backgroundColor;

    }
  }
  
  // a = "Ritik";
  pagesize=10;
  render() {
    return (
      <div style={{color: this.state.color, backgroundColor: this.state.backgroundColor==='black'?'#10505a':'white'}}>
       <Router>
        <Navbar color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark}/>
        <Routes>
        <Route exact path ="/" element={<News key="general" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="science"/>}/>
        <Route exact path ="/business" element={<News key="business" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="business"/>}/>
        <Route exact path ="/entertainment" element={<News key="entertainment" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="entertainment"/>}/>
        <Route exact path ="/general" element={<News key="general" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="general"/>}/>
        <Route exact path ="/health" element={<News key="health" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="health"/>}/>
        <Route exact path ="/science" element={<News key="science" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="science"/>}/>
        <Route exact path ="/sports" element={<News key="sports" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="sports"/>}/>
        <Route exact path ="/technology" element={<News key="technology" color={this.state.color} backgroundColor={this.state.backgroundColor} func={this.myfunc} lighttodark={this.state.lighttodark} pagesize={this.pagesize} country="in" category="technology"/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

