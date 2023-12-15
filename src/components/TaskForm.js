import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div>
        <h2 className="mb-4 mt-4">New Task:</h2>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Your task"
          ></input>
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Describe it"
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mb-5">
          Add
        </button>
      </div>
    );
  }
}

export default TaskForm;
