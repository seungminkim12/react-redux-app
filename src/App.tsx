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
  return (
    <div className="App">
      Clicked: {props.value.counter} times
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}

export default App;
