import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "ComponentB"
        }

        console.log("ComponentB constructor")
 
        /*
        this.setState(
            {name:"setState() called in ComponentB constructor()"}
        )// Can't call setState on a component that is not yet mounted.
        */
    }

    //static getDerivedStateFromProps(porps,state){
    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateByProps")
        /*
        this.setState(
            {name : "setState() called in ComponentB getDerivedStateFromProps()"}
        )//uncaught TypeError: Cannot read properties of undefined (reading 'setState')
        */
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
        /*
        this.setState(
            {name : "setState() called in render()"}
        )// infinit loop because setState() implicitly call render function
        */
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default ComponentB;