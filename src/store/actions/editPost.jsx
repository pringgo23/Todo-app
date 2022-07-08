import axios from "axios";

export const editPost = (payload) => {
  return (dispatch) => {
    const { params, body, config, onSuccess, onFail } = payload;

    axios
      .put(
        `https://peaceful-citadel-71310.herokuapp.com/todo/${params}`,
        body,
        config
      )
      .then(({ data }) => {
        if (typeof onSuccess === "function") {
          onSuccess();
        }
      })
      .catch((err) => {
        onFail();
      });
  };
};

export const setEdit = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
