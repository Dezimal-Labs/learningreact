import { createStore } from "redux";

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
const store = createStore(rootReducer);

export default store;
