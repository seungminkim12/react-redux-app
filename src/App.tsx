import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./reducers";

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
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    //새로고침 방지
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };
  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
