import { combineReducers } from "redux";
import registerPost from "./registerReducer.jsx";
import loginPost from "./loginReducer.jsx";
import homePost from "./homeReducer.jsx";
import editPost from "./editReducer.jsx";
// import homeDelete from "./deleteReducer.jsx";

const rootReducers = combineReducers({
  registerPost,
  loginPost,
  homePost,
  editPost,
  // homeDelete,
});

export default rootReducers;
