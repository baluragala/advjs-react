///import * as Redux from "redux";

/*
  1. plan actions
  2. code your reducers
  3. create store
*/

const INC_ACTION_TYPE = "INC";
const DEC_ACTION_TYPE = "DEC";

const incAction = { type: INC_ACTION_TYPE, by: 2 };
const decAction = { type: DEC_ACTION_TYPE, by: 1 };

const initialState = { counter: 0 };

function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case INC_ACTION_TYPE:
      return { counter: prevState.counter + action.by };
    case DEC_ACTION_TYPE:
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}

const store = Redux.createStore(counterReducer);

const incBtn = document.querySelector("#inc");
const decBtn = document.querySelector("#dec");
const resultSpan = document.querySelector("#result");

store.subscribe(() => {
  resultSpan.textContent = store.getState().counter;
});

incBtn.addEventListener("click", function() {
  store.dispatch(incAction);
});

decBtn.addEventListener("click", function() {
  store.dispatch(decAction);
});

// store.dispatch(incAction);
// store.dispatch(incAction);
// store.dispatch(incAction);
// store.dispatch(incAction);
// store.dispatch(incAction);
// store.dispatch(decAction);
