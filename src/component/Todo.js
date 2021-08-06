import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const handlerDelete = () => {
    //console.log(todo); //{text: "nvb", completed: false, id: 841.9812217997555}
    setTodos(todos.filter((el) => el.id !== todo.id)); // each element when clicked trying to match todolist, kept todos(filter) which does follow the condition
  };

  const handlerComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li
        className="todo-item"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {text}{" "}
        <button onClick={handlerComplete} className="complete-btn">
          <i className=" fa fa-check"></i>
        </button>
        <button onClick={handlerDelete} className="trash-btn">
          <i className=" fa fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
