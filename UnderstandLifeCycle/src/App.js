import React from "react";
// import ComponentA from "./Components/Component/ComponentA";
import TimerOne from "./Components/Timer/TImerOne";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      mount: false,
      timerOn: false
    }
  }

  handleMount = () => {
    this.setState((prevState) => ({mount: !prevState.mount}))
  }

  handleTimerOn = () =>{
    this.setState((prevState) => ({timerOn: !prevState.timerOn}))
  }

  render(){
    return(
      <>
      {/* <ComponentA/> */}
      <button onClick={this.handleMount}>{this.state.mount? "Un-Mount" : "Mount"}</button>
      {this.state.mount? <TimerOne timerOn={this.state.timerOn}/>:null}
      <button onClick={this.handleTimerOn}>{this.state.timerOn? "Stop":"Start"}</button>
      </>
    );
  }
}

export default App;
