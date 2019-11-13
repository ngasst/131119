import { createStore } from "redux";
import { countersReducer } from "./counter";

export const store = createStore(countersReducer);
