import React, { Component } from "react"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    _handleClick() {
        console.log("点击事件 state count ++")
        this.setState({
            count: ++this.state.count
        })
    }
    render() {
        return (
            <div>this is home ~~~~~<br/>
            当前计数{this.state.count}<br></br>
            <button onClick={()=>{this._handleClick()}}>点击自增</button>
            </div>
        )
    }
}