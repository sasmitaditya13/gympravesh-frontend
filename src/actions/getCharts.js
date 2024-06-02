import axios from "axios";

import { GET_CHART_DATA_SUCCESS, GET_CHART_DATA_FAILURE } from "../constants/actions";

import { chartsAPI } from "../urls";

export const getCharts = (token , time) => {
  return (dispatch) => {
    axios.get(`${chartsAPI()}` , {headers:{'authorization':token} , params:{'time':time}})
    .then((res) => {
        dispatch({
          type: GET_CHART_DATA_SUCCESS,
          payload: JSON.parse(res.data),
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_CHART_DATA_FAILURE,
        })
    });
  };
};