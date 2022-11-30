import { USER_BUY } from "../action/actionTypes";

const userBuy = (state = [], action)=>{
    switch(action.type){
        case USER_BUY:
            return state = [...state, ...action.payload]
        default:
            return state
    }
}

export default userBuy