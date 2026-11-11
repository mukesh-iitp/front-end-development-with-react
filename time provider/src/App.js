import "./styles.css";
import { Actions } from "./components/Actions";
import { Timer } from "./components/Timer";
//  add redux imports here


export default function App() {
  return (
    // Provide the provider here for Timer and actions
    <div className="App">
      <h1>Simple Timer</h1>
      <Timer />
      <Actions />
    </div>
  );
}
