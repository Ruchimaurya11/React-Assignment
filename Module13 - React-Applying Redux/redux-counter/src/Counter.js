import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      height: "100vh", backgroundColor: "skyblue", color: "black"
    }}>
      <h1>Hello Redux</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())} style={{
          margin: "5px", padding: "10px 20px", backgroundColor: "white",
          color: "black", border: "2px solid black", cursor: "pointer", fontSize: "16px"
        }}>Increment</button>

        <button onClick={() => dispatch(decrement())} style={{
          margin: "5px", padding: "10px 20px", backgroundColor: "white",
          color: "black", border: "2px solid black", cursor: "pointer", fontSize: "16px"
        }}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;

