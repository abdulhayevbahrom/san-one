import { PROFIL_EDIT, USER } from "../action/actionTypes";

const register = (state = null, action) => {
  switch (action.type) {
    case USER:
      return state = state = action.payload
      break;
    case PROFIL_EDIT:
      return state = state = null, state = action.payload
    default:
      return state;
  }
};

export default register;
