import React, { useState } from "react";
import "./App.css";

type OwnProps = {
  // value: number | string;
  value: {
    counter: number;
    todos: string[];
  };
  onIncrement(): void;
  onDecrement(): void;
};

function App(props: OwnProps) {
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    //새로고침 방지
    e.preventDefault();
    setTodoValue("");
  };
  return (
    <div className="App">
      Clicked: {props.value.counter} times
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
