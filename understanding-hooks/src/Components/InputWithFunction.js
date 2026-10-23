import { useState, useEffect } from "react";

export default function Input(){

    const [name, setName] = useState("Harry")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        document.title = name + " "+ lastName;
    })

    // useEffect(() => {
    //     document.title = name + " "+ lastName;
    // },[]) //empty array in dependency will make happen at document mounting phase only
   
    // useEffect(() => {
    //     document.title = name + " "+ lastName;
    // },[lastName]) //componentDidUpdate will happen only when lastname changes

    useEffect(() =>{
        let timer = setInterval(() => {
            console.log("Window width ", window.innerWidth)
        },2000)

        return(clearInterval(timer)); //return will perform cleanup by itself
    })

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
            </Row >
            <Row label="Last Name">
                    <input className="input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
            </Row >
        </div>

        <h2>Hello, {name+" "+lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
