import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state ={
            count: 0
        }
    }
    onClickIncrement(){
        this.setState({
            count: this.state.count+1
        })
    }
    
    onClickDecrement(){ 
        this.setState({
            count: this.state.count-1
        })
    }

    render(){
        return(
            <div>
            <h1>Number: {this.state.count}</h1>
            <button onClick={()=>{this.onClickDecrement()}}>Decrease</button>
            <button onClick={()=>{this.onClickIncrement()}}>Increase</button>
            </div>
        )
    }



}
export default Counter