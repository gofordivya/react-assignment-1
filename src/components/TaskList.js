import React, { Component } from "react";

class TaskList extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <div>
        <ul className="list-group">
          {taskList.map((item) => (
            <li key={item.id} className="list-group-item">
              <b>{item.title} </b>
              <em>{item.description}</em>
              <a className="btn btn-success float-end">Done</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
