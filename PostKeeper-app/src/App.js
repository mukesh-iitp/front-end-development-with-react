import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import {PostContextProvider} from "./postContext"

export default function App() {
  return (
    //Add the Context provider here
    <div className="App">
      <PostContextProvider>
        <Navbar />
        <List />
      </PostContextProvider>
    </div>
  );
}
