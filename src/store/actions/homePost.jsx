import axios from "axios";

export const homePost = (payload) => {
  return (dispatch) => {
    const { params, config, onSuccess, onFail } = payload;

    axios
      .post("https://peaceful-citadel-71310.herokuapp.com/todo", params, config)
      .then((data) => {
        if (typeof onSuccess === "function") onSuccess();
      })
      .catch((err) => {
        onFail();
      });
  };
};

export const setHome = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
