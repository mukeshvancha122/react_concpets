import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render(){
        return (<h1>
            {this.state.message}
            <button onClick={() =>{this.changeMessage()}}>subscribe</button>
        </h1>)
    }
}
export default Message