import { useEffect, useState } from "react";

export default function Login(){
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");  

    useEffect(() =>{
      let email = localStorage.getItem("email");

      if(email){
        setEmail(email);
      }
    },[])//order of hooks is important

    useEffect(() =>{
      localStorage.setItem("email", email)
    },[email])

    useEffect(() =>{
      let email = localStorage.getItem("email");

      if(email){
        setEmail(email);
      }
    },[])

    return(
        <>
        <h1>Login to the Portal!</h1>
        <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted")
        }}
      >
        Submit
      </button>
      <br />
        </>
    )
}