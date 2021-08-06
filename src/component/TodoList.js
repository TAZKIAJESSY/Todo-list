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
        {props.filteredTodos.map((todo) => (
          <Todo
            todos={props.todos}
            setTodos={props.setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
