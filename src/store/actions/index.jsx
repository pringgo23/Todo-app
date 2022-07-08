import { registerPost, setPost } from "./registerPosts.jsx";
import { loginPost, setLogin } from "./loginPosts.jsx";
import { homePost, setHome } from "./homePost.jsx";
import { editPost, setEdit } from "./editPost.jsx";
// import { homeDelete, deleteHome } from "./homeDelete.jsx";

const allStore = {
  registerPost,
  setPost,
  loginPost,
  setLogin,
  homePost,
  setHome,
  editPost,
  setEdit,
  // homeDelete,
  // deleteHome,
};

export default allStore;
