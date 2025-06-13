import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { fetchReducers } from "../reducer/fetch-reducer";
import { transferReducer } from "../reducer/transfer-reducer";
import { priorityFilter } from "../reducer/filter-reducer";

const rootCombine = combineReducers({
  fetch: fetchReducers,
  transfer: transferReducer,
  filter: priorityFilter,
});

const store = createStore(
  rootCombine,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
