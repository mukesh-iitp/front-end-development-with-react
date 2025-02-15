/**Expressions in JSX */

//Creating a component

function sum(){
    let a = 10+5;
    return a;
    //return "sum";
}

const tempInFahrenheit = 12;

function toCelsius(temp){
    //write logic here to convert the temp in celsius
    let celsius = (temp - 32) * (5 / 9);
    return celsius;
}

const header = <h2>JSX Expression.</h2>;

const [, animal] = ['Horse', 'Cat', 'Cow'];


function App(){
    var name = "Alexa";
    var age = 34;
    let demo = null;
    let undef;
    const bool = false;

    return(
        <>
        <h1>Lets Learn JSX</h1>
        <h2>Java Script inside JSX</h2>
        {header}
        <h3>Hello {name}!</h3>
        <p>Your age is {age}.</p>
        <p>Null Value: {demo}</p>
        <p>Undefined Value: {undef}</p>
        <p>Boolean Value: {bool.toString()}</p>
        <p>Calling a function: {sum()}</p>
        <p>Temperature in fahrenheit: {tempInFahrenheit}</p>
        <p>Temperature in celsius: {toCelsius(tempInFahrenheit)}</p>
        {animal}
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);