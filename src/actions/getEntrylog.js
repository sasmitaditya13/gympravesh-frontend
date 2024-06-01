import axios from "axios";

import { GET_ENTRY_LOG_SUCCESS, GET_ENTRY_LOG_FAILURE } from "../constants/actions";

import { entrylogAPI } from "../urls";

export const getToken = (token , time) => {
  return (dispatch) => {
    axios.get(`${entrylogAPI()}` , {headers:{'authorizatoin':token} , params:{'time':time}})
    .then((res) => {
        dispatch({
          type: GET_ENTRY_LOG_SUCCESS,
          payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_ENTRY_LOG_FAILURE,
        })
    });
  };
};