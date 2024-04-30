import "./App.css";
import { Query } from "./Components/Query";
import { Task } from "./Components/Task";

function App() {
  return (
    <>
      <div>
        <h1>Task Component</h1>
        <Task />
        <h1>Query Component</h1>
        <Query />
      </div>
    </>
  );
}

export default App;
