import { createStore } from "redux";


const incrementReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;


        default:
            return state;

    }
}

const incrementStore = createStore(incrementReducer);
export default incrementStore;