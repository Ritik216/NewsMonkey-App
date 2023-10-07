import React, { Component } from 'react'
import Spinloading from './Spinloading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinloading} alt="loading" />
      </div>
    )
  }
}
