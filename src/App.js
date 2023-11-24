import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./Redux/counterSlice";
import { useState } from "react";
function App() {
  const { count } = useSelector((state) => state.countReducer);

  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();
  const addOne = () => {
    dispatch(increment());
  };
  const minusOne = () => {
    dispatch(decrement());
  };

  const zidEliT7eb = () => {
    dispatch(incrementByAmount(+number));
  };

  return (
    <div className="App">
      <p> {count} </p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <br />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={zidEliT7eb}>Add</button>
    </div>
  );
}

export default App;
