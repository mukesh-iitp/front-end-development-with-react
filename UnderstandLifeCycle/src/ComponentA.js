import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "ComponentA"
        }

        console.log("ComponentA constructor")
 
        /*
        this.setState(
            {name:"setState() called in ComponentA constructor()"}
        )// Can't call setState on a component that is not yet mounted.
        */
    }

    //static getDerivedStateFromProps(porps,state){
    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateByProps")
        /*
        this.setState(
            {name : "setState() called in ComponentA getDerivedStateFromProps()"}
        )//uncaught TypeError: Cannot read properties of undefined (reading 'setState')
        */
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount")
        this.setState(
            {name : "setState() called in ComponentA componentDidMount()"}
        )
    }

    render(){
        console.log("ComponentA render")
        /*
        this.setState(
            {name : "setState() called in render()"}
        )// infinit loop because setState() implicitly call render function
        */
        return(<>
            <h1>{this.state.name}</h1>
            <ComponentB/>
            </>
        )
    }
}

export default ComponentA;