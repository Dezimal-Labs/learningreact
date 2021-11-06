import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const productListReducer = (

    state = { loading: true, users: [] },
    action
) => {
    switch (action.type) {
        case "LIST_REQ":
            return { loading: true };
        case "LIST":
            return {
                loading: false,
                users: action.payload
            };

        default:
            return state;
    }
};

const initialState = {
    users: [],
};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const incrementStore1 = createStore(
    productListReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default incrementStore1;