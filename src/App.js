import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

class App extends Component {
  state = {
    taskList: [],
  };

  componentDidMount() {
    const localStorageValue =
      JSON.parse(localStorage.getItem("taskList")) || [];
    this.setState({ taskList: localStorageValue });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4">
          <TaskForm></TaskForm>
          <TaskList taskList={this.state.taskList}></TaskList>
        </div>
      </div>
    );
  }
}

export default App;
