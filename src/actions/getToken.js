import axios from "axios";

import { GET_TOKEN_FAILURE, GET_TOKEN_SUCCESS } from "../constants/actions";

import { tokenAPI } from "../urls";

export const getToken = (username, password) => {
  return (dispatch) => {
    axios.post(`${tokenAPI()}` , {username,password})
    .then((res) => {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_TOKEN_FAILURE,
        })
    });
  };
};
