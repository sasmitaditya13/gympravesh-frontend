import axios from "axios";

import { GET_VISITS_SUCCESS, GET_VISITS_FAILURE } from "../constants/actions";

import { visitsAPI } from "../urls";

export const getToken = (token , time) => {
  return (dispatch) => {
    axios.get(`${visitsAPI()}` , {headers:{'authorizatoin':token} , params:{'time':time}})
    .then((res) => {
        dispatch({
          type: GET_VISITS_SUCCESS,
          payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_VISITS_FAILURE,
        })
    });
  };
};