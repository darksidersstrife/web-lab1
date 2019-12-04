import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/reducer"
import reduxpromise from "redux-promise"

let initialState = JSON.parse(localStorage.getItem("cityList")) || {cities : { }};
let store = createStore(reducer, initialState, applyMiddleware(reduxpromise));

store.subscribe(() => {
    localStorage.setItem("cityList", JSON.stringify(store.getState()));
});

export default store