import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  handleAddTask = () => {
    const { title, description } = this.state;

    const newTask = {
      id: new Date().getTime(),
      title,
      description,
    };

    const existingTask = JSON.parse(localStorage.getItem("taskList")) || [];
    const updatedTask = [...existingTask, newTask];

    localStorage.setItem("taskList", JSON.stringify(updatedTask));
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <div>
        <h2 className="mb-4 mt-4">New Task:</h2>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Your task"
            onChange={this.handleInputChange}
            value={title}
          ></input>
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            rows="3"
            name="description"
            placeholder="Describe it"
            onChange={this.handleInputChange}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mb-5"
          onClick={this.handleAddTask}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TaskForm;
