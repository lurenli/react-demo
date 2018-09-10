import React, { Component } from 'react'
import './Page1.css'
import exampleImg from './images/example.jpg'

export default class Page1 extends Component {
    render() {
        return (
            <div>
                <div className="mydiv">this is page1 ~~~~~(修改page1)</div>
                <img src={exampleImg} alt="" className="img"/>
            </div>
        )
    }
}