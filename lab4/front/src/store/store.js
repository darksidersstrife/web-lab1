import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers/reducer"
import reduxpromise from "redux-promise"

let store = createStore(reducer, {}, applyMiddleware(reduxpromise));

export default store