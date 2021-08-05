import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  // console.log(props.todos);

  return (
    <div className="todo-container">
      <ul
        className="todo-list"
        style={{
          listStyleType: "none",
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        {props.todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}
