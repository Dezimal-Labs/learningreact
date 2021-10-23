const redux = require("redux");

export default function simpleReduxHook() {
    // 1. Create a basic reducer
    const rootReducer = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
                break;
            case "DECREMENT":
                return state - 1;
                break;
            default:
                return state;
                break;
        }
    };

    // 2. Create a store
    const store = redux.createStore(rootReducer);

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