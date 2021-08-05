import React from "react";

export default function Todo({ text }) {
  return (
    <div className="todo">
      <li className="todo-item">
        {text}{" "}
        <button className="complete-btn">
          <i className=" fa fa-check"></i>
        </button>
        <button className="trash-btn">
          <i className=" fa fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
