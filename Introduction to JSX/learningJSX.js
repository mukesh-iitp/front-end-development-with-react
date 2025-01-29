/**Arrays and Objects in JSX */

function CarsPage(){
    let carDetails = [
        {
            name: "BMW",
            average: 10,
            img: "./images/car.png"
        },
        {
            name: "Audi",
            average: 12,
            img: "./images/car.png"
        },
        {
            name: "Nexa",
            average: 18,
            img: "./images/car.png"
        }
    ]

    return (
        <>
        <h2>Car Details:</h2>
        <table border="1px">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody>
            {carDetails.map((car, index) => (
                <tr key = {index}>
                    <td><img src={car.img}/></td>
                    <td>{car.name}</td>
                    <td>{car.average}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )

}

function App(){

    let arr = [1,2,3,4,5,6];

    const cars = ["Audio", "BMW", "Alto", "Maruti", "Nexa"];    

    let obj = {
        name: "Gemini",
        age: 20
    }

    let firstName = "Alexa";
    let lastName = "Diaz";


    const students=[
        {
            name: "Ajay",
            age:20,
            marks: 85
        },
        {
            name: "Ravi",
            age:21,
            marks: 81
        },
        {
            name: "Kaveri",
            age:19,
            marks: 88
        }
    ]


    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //const evenNumbers = numbers.filter(number => number % 2 === 0);

    let showCars = false;
    if(showCars){
        return <CarsPage/>
    }

    let loggedIn = true;

    return (
        <>
        <h1>Hello, {loggedIn? lastName || firstName:"User"}!</h1>
        {loggedIn && <h2>Welcome to the portal.</h2>}
        <h1>Arrays and Objects in Javascript.</h1>
        <h2>{arr}</h2>
        <h2>{obj.name}</h2>
        {arr.map((num, index) => <h2 key={index}>{num}</h2>)}
        <ul>
            {cars.map((car, index) => <li key = {index}>{car}</li>)}
        </ul>
        {/* {evenNumbers.map((num) => <h3>{num}</h3>)} */}
        {numbers.filter((n) => n % 2 === 0).map((n,i) => (<h3 key={i}>{n}</h3>))}
        <h2>Student Details:</h2>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (
                <tr key = {index}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.marks}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <CarsPage/>
        </>
    )

}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);