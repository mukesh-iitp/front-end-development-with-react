import { Component } from "react"

export default class ErrorBoundary extends Component{

    constructor(){
        super();
        this.state={
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info){
        console.log("Error: ",error);
        console.log("Info: ",info);
    }

    render(){
        if(this.state.hasError)
            return(<h1>Something went wrong! Contact administrator.</h1>
        )
        return this.props.children;
    }

}