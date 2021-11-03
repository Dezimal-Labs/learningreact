import React from "react";
import { useDispatch,useSelector } from "react-redux";

import store from '../store/store.js'

export default function Increment() {
  const dispatch = useDispatch();
const state = useSelector(state => state)
  const OnIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <button onClick={OnIncrement}>Increment</button>
      <div>
        <p>{state}</p>
      </div>
    </div>
  );
}
