import { ADD_ITEM, DELETE_FROM_CART, ADD_TO_CART, CLEAR_CART } from "../action/actionTypes";

const addToCart = (state = [], action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return state = [...state, action.payload]
            break;
        case DELETE_FROM_CART:
            return state = state.filter(i=>i.id !== action.payload)
            break;
        case CLEAR_CART:
            return state = state=[]

            // case ADD_ITEM:
        //         return state = state.map(i=>i.id===action.payload.id ? i.price+20 : i.price)
        default:
            return state
    }
}

export default addToCart



// const index = state.findIndex((item) => item.id === action.payload.id)
// index>-1 ? state[index].price += state[index].price : state = [...state, action.payload]