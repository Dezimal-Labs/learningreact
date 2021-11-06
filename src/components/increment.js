import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";





export default function Increment() {

  // useEffect(() => {
  //   fetch(
  //     "https://jsonplaceholder.typicode.com/users")
  //                 .then((res) => res.json())
  //                 .then((json) => {
  //                  console.log(json);
  //                 })
       
      
  //   }, [])


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
