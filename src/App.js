import React, { useState } from "react";
import "./index.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
