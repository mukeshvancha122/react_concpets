import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handlerUsernameChange =(event)=>{
    this.setState({
        username: event.target.value
        })
  }
  handlerPasswordChange=(event)=>{
    this.setState({
        password: event.target.value
    })
  }
  handleSubmit=(event)=>{
    console.log("username:", this.state.username)
    console.log("password:", this.state.password)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>Form Component</div>
            <label>username:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handlerPasswordChange} />
            <br/>
            <label>Password:</label>
            <input type="text" name="password" value={this.state.password} onChange={this.handlerPasswordChange}/>
            <button type='submit'>Submit</button>
      </Form>
    )
  }
}

export default Form