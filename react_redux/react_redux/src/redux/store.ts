import { createStore, combineReducers } from "redux";

import reducer from "./reducers";

const allReducers = combineReducers({
  submittedValue: reducer,
});

export const store = createStore(allReducers);
