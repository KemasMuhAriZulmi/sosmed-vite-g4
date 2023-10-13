import { LOGIN_SUCCESS } from "./type";

const INITIAL_STATE = {
  id: 0,
  email: "",
  password: "",
  name: "",
  profilepicture: "",
};

export const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,

        email: action.payload.email,
        username: action.payload.username,
      };
    default:
      return state;
  }
};
