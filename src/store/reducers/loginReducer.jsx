const initialState = [];

const loginReducer = (state = initialState, action) => {
  if (action.type === "SET_POST") {
    return action.payload;
  }

  return state;
};
