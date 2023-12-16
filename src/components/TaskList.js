import React, { Component } from "react";

class TaskList extends Component {
  handleDeleteTask = (id) => {
    const existingTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

    const taskItemindexToDelete = existingTaskList.findIndex(
      (task) => task.id === id
    );

    if (taskItemindexToDelete !== -1) {
      existingTaskList.splice(taskItemindexToDelete, 1);
      localStorage.setItem("taskList", JSON.stringify(existingTaskList));
    }
  };
  render() {
    const { taskList } = this.props;
    return (
      <div>
        <ul className="list-group">
          {taskList.map((item) => (
            <li key={item.id} className="list-group-item">
              <b>{item.title} </b>
              <em>{item.description}</em>
              <a
                className="btn btn-success float-end"
                onClick={() => this.handleDeleteTask(item.id)}
              >
                Done
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
