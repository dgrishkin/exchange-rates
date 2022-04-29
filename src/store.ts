import * as RR from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"

const store = createStore(combineReducers({}), applyMiddleware(thunkMiddleware));

export default store;
export interface IRootState{};
export const useSelector: RR.TypedUseSelectorHook<IRootState> = RR.useSelector;
export type RootState = () => IRootState;