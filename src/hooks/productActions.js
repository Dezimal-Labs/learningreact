export const listProducts = () => (dispatch) => {

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

};