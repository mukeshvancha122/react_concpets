import React from 'react'

class WelcomeClassComponent extends React.Component{
    render(){
        return (
        <div>Welcome Class{this.props.name}</div>
        )
    }
}

export default WelcomeClassComponent
