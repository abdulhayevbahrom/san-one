import { combineReducers } from "redux";
import addToCart from "./addToCart";
import register from "./user";
import userBuy from "./user_buy";

const reducer = combineReducers({
    addToCart,
    register,
    userBuy
})

export default reducer