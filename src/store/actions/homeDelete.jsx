// import axios from "axios";

// export const homeDelete = (payload) => {
//   return (dispatch) => {
//     const { params, config, onSuccess, onFail } = payload;
//     return axios
//       .delete(
//         `https://peaceful-citadel-71310.herokuapp.com/todo/${params}`,
//         config
//       )
//       .then((data) => {
//         if (typeof onSuccess === "function") onSuccess();
//       })
//       .catch((err) => {
//         onFail();
//       });
//   };
// };

// export const deleteHome = (payload) => {
//   return {
//     type: "SET_DELETE",
//     payload,
//   };
// };
