import React from "react";

class Timer extends React.Component{

    constructor(){
        super();
        
        this.state = {
            count : 0,
            time: 0
        };
        
        this.timer = null;

        console.log("TimerOne Constructor")
    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromPorps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }


    handleIncrease = () =>{
        this.setState((prevState) => {
            return{count: prevState.count+1}
        })
    }

    render(){
        console.log("TimerOne Render")
        return(
            <>
            <h1><u>Timer</u></h1>
            <h2>Time Spent:</h2>
            <h2>{ new Date(this.state.time * 1000 ).toISOString().slice(11,19)}</h2>
            <hr></hr>
            {/* <h1><u>Counter</u></h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleIncrease}>Increase</button> */}
            </>
        )
    }

    componentDidMount(){
        console.log("TimerOne componentDidMount")
        console.log("__________________________")

        /*
        this.timer = setInterval(() => {
            this.setState((prevState) => (
                {time: prevState.time +1}
            ))
        // },1000);
        },5000);
        */
    }

    getSnapshotBeforeUpdate(prevPorps, prevState){
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
        // return 5; //for demo purpose
    }

    // componentDidUpdate(){
    //     console.log("TimerOne componentDidUpdate")
    //     console.log("__________________________")
    //     if(this.state.time === 10)
    //         clearInterval(this.timer)
    // }

    componentDidUpdate(prevPorps,prevState,snapShot){ //arguments are optional
        console.log("TimerOne componentDidUpdate")
        console.log("__________________________")
        /*console.log("Previous Props: ",prevPorps)
        console.log("Previous State: ",prevState)
        console.log("SnapShot from getSnapshotBeforeUpdate: ",snapShot)
        */

        if(prevPorps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(() => {
                    this.setState((prevState) => (
                        {time: prevState.time +1}
                    ))
                },1000);
            }
            else
                clearInterval(this.timer);
        }
    }


    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount")
        clearInterval(this.timer);
    }

}

export default Timer;