import axios from "axios";

export const loginPost = (payload) => {
  return (dispatch) => {
    const { params, onSuccess, onFail } = payload;
    return axios
      .post("https://peaceful-citadel-71310.herokuapp.com/signin", params)
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.data.token);
        if (typeof onSuccess === "function") onSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setLogin = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
