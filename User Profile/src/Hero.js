// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import { Component } from "react";

var name = "Pranav Sharad Yeole";
var email= "pranav@google.com";
var phone= 8546465544;
var address= "ABC, xyz street";

class Hero extends Component{

    render(){
        return(
            <>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </>
        )
    }

}

export default Hero;