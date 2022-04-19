import { combineReducers } from "redux";
import titlesReducer from "./titlesReducer";


export default combineReducers ({
    titles: titlesReducer,
})