import React from "react";

export default function TodoForm(props) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]); //creating a piece of state for all todos
    props.setInputText("");
  };

  const statusHandler = (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target.value);
    props.setStatus(e.target.value);
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          color: "teal",
          fontFamily: "oblique",
          marginTop: "7rem",
        }}
      >
        ToDo List
      </div>
      <hr />

      <div className="row">
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <input
            onChange={inputTextHandler}
            value={props.inputText}
            type="text"
          />
          <button onClick={submitTodoHandler} type="submit">
            <i className="fa fa-plus" aria-hidden="true"></i>{" "}
          </button>
          <select
            onChange={statusHandler}
            name="todos"
            className="filter-todos"
            style={{ marginLeft: "3rem", width: "20%", height: "2rem" }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </form>
      </div>
    </div>
  );
}
