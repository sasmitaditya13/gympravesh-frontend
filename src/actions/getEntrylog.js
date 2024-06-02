import axios from "axios";

import { GET_ENTRY_LOG_SUCCESS, GET_ENTRY_LOG_FAILURE } from "../constants/actions";

import { entrylogAPI } from "../urls";

export const getEntry = (token , date, filters) => {
  return (dispatch) => {
    axios.get(`${entrylogAPI()}` , {headers:{'authorization':token} , params:{'filter':""}})
    .then((res) => {
        dispatch({
          type: GET_ENTRY_LOG_SUCCESS,
          payload: JSON.parse(res.data),
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_ENTRY_LOG_FAILURE,
        })
    });
  };
};