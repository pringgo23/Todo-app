import axios from "axios";

export const homeGet = (payload) => {
  return (dispatch) => {
    const { params, onSuccess } = payload;
    return axios
      .get("https://peaceful-citadel-71310.herokuapp.com/todo", params)
      .then((data) => {
        if (typeof onSuccess === "function") onSuccess(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
