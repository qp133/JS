// Dùng để gộp tất cà các reducer lại với nhau
import {combineReducers} from "redux"
import counterReducer from "./counterReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    todos: todoReducer,
    shoppingCart: shoppingCartReducer
})

export default rootReducer;