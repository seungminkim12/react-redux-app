import "./App.css";

type OwnProps = {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
};

function App(props: OwnProps) {
  return (
    <div className="App">
      Clicked: {props.value} times
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}

export default App;
