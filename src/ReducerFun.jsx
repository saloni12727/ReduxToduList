import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/deletee";

const intialstate = {
  task: [],
};

function ReducerFun(state = intialstate, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updateTask = state.task.filter((curEle, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updateTask,
      };
    default:
      return state;
  }

  // return(
  //     <>
  //     <h1>Heloo</h1>
  //     </>
  // )
}

export const store = createStore(ReducerFun, composeWithDevTools());
// console.log(store.getState())

// store.dispatch({type:ADD_TASK , payload:"mango"});
// console.log(store.getState())
// store.dispatch({type:ADD_TASK , payload:"banana"});
// console.log(store.getState())
// store.dispatch({type:ADD_TASK , payload:"cherry"});
// console.log(store.getState())

// store.dispatch({type:DELETE_TASK , payload:0})
// console.log(store.getState())

export const AddTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const DeleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

store.dispatch(AddTask("mango"));
store.dispatch(AddTask("banana"));
store.dispatch(AddTask("cherry"));
store.dispatch(AddTask("guava"));
console.log(store.getState());

store.dispatch(DeleteTask(3));
console.log(store.getState());

export default ReducerFun;
