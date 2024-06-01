import axios from "axios";

import { GET_CHART_DATA_SUCCESS, GET_CHART_DATA_FAILURE } from "../constants/actions";

import { chartsAPI } from "../urls";

export const getToken = (token , time) => {
  return (dispatch) => {
    axios.get(`${chartsAPI()}` , {headers:{'authorizatoin':token} , params:{'time':time}})
    .then((res) => {
        dispatch({
          type: GET_CHART_DATA_SUCCESS,
          payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_CHART_DATA_FAILURE,
        })
    });
  };
};