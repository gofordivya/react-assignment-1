import React, { Component } from "react";

class TaskList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Title: </b>
            <em>description</em>
            <a className="btn btn-success float-end">Done</a>
          </li>
          <li className="list-group-item">
            <b>Title: </b>
            <em>description</em>
            <a className="btn btn-success float-end">Done</a>
          </li>
          <li className="list-group-item">
            <b>Title: </b>
            <em>description</em>
            <a className="btn btn-success float-end">Done</a>
          </li>
          <li className="list-group-item">
            <b>Title: </b>
            <em>description</em>
            <a className="btn btn-success float-end">Done</a>
          </li>
          <li className="list-group-item">
            <b>Title: </b>
            <em>description</em>
            <a className="btn btn-success float-end">Done</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TaskList;
