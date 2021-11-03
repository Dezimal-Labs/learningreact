
import store from "../store/store";


export default function simpleReduxHook() {


    // 2. Create a store
    
    const OnIncrement = () => {
        // 3. Dispatch Actions
        store.dispatch({ type: "INCREMENT" });
        console.log("state after increment=", store.getState());
    };

    const OnDecrement = () => {
        // 3. Dispatch Actions
        store.dispatch({ type: "DECREMENT" });
        console.log("state after decrement=", store.getState());
    };
    const getState = () => {
        store.getState();
    };

    return { OnIncrement, OnDecrement, getState };
};

//export default simpleReduxHook;