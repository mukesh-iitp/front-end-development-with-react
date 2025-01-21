/**Java Script */
// const heading = document.createElement("h2");
//     heading.textContent="Hello World";
//     heading.className="header";
//     document.getElementById("root").append(heading);

//     console.log("Javascript element: ", heading);


/**REACT WITH JS*/

//const reactHeading = React.createElement("h1", {className: "head", id:"reactHead"}, "Hello React!");
//const reactHeading = React.createElement("h1", {className: "head", id:"reactHead", children:"Hello React!"});
//ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

//const reactImage = React.createElement("img", {className: "image", id: "image", src : "https://files.codingninjas.in/coding-ninjas-24647.png"});
//ReactDOM.createRoot(document.getElementById("root")).render(reactImage);

//console.log("React element: ", reactHeading);


/**REACT WITH JSX*/

// const jsxHeading = (
//                     <React.Fragment>
//                     <h1 className = "head">Hello JSX!</h1>
//                     <p>This is created using JSX.</p>
//                     </React.Fragment>
//                     );
//or
// const jsxHeading = (
//                     <>
//                     <h1 className = "head">About React</h1>
//                     <p>ReactJS is a JavaScript library that provides a fast, lightweight, and modern way to execute code.</p>
//                     <p><u>Features of React:</u></p>
//                     <ol>
//                         <li>Creation of Dynamic Web Applications</li>
//                         <li>Code Maintenance</li>
//                         <li>Mobile App Development</li>
//                     </ol>
//                     </>
//                     );


// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


//Component in React
// function App(){
//     return(
//         <>
//         <h1 className = "head">Hello JSX!</h1>
//         <p>This is created using JSX.</p>
//         </>
//     )
// }

function Name(){
    return(
        <>
        <p>JSX is JavaScript XML</p>
        </>
    )
}


//Component using arrow function in React


const App = () => (
        <>
        <h1 className = "head">Hello JSX!</h1>
        <p>This is created using JSX.</p>
        <Name/>
        </>
    )

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name/></>);