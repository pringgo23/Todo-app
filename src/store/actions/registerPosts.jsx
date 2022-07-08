import axios from "axios";

export const registerPost = (payload) => {
  return (dispatch) => {
    const { params, onSuccess, onFail } = payload;
    return axios({
      url: "https://peaceful-citadel-71310.herokuapp.com/signup",
      method: "post",
      data: params,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (typeof onSuccess === "function") onSuccess(); //berfungsi untuk jika data sukse maka jalankan function onSuccess
        // if (!!onSuccess) onSuccess();
        // if (Boolean(onSuccess)) onSuccess();
        // onSuccess?.();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setPost = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
