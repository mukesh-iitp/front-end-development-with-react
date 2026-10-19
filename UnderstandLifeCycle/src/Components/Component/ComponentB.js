import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "ComponentB"
        }

        console.log("ComponentB constructor")
 
    }

    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateByProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount")
        this.setState(
            {name : "setState() called in ComponentB componentDidMount()"}
        )
    }

    render(){
        console.log("ComponentB render")
        return(
            <h2>{this.state.name}</h2>
        )
    }
}

export default ComponentB;