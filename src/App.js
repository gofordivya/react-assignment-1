import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="col-md-4">
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
