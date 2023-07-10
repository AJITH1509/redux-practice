import "./App.css";
import { NavBar } from "./NavBar";
import { AddTask } from "./AddTask";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <AddTask />
    </div>
  );
}

export default App;
