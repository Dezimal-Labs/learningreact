import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../hooks/productActions";

export default function IncrementThunkcomp() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state);
  const { loading, users } = productList;

//   useEffect(() => {
//     dispatch(listProducts());
//     if (!loading) console.log(users);
//   }, [dispatch]);

useEffect(() => {
    dispatch (  (dispatch) => {
 
         dispatch({
             type: "LIST_REQ"
         });
         
             fetch("https://jsonplaceholder.typicode.com/users")
                 .then((res) => res.json())
                 .then((json) => {
                     console.log("users ");
                     console.log(json);
                     dispatch({ type: "LIST", payload: json });
                 });
        
     })
     if (!loading) console.log(users);
   }, []);

  return (
    <div>
      <div>
        <div>
          {loading ? (
            <p>Data is loading...</p>
          ) : (
            <ul>
              {users.map((item) => (
                <li key={item.id}>
                  <div>
                    <div>{item.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
