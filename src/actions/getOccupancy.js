import axios from "axios";

import { GET_OCCUPANCY_FAILURE, GET_OCCUPANCY_SUCCESS } from "../constants/actions";

import { occupancyAPI } from "../urls";

export const getOccupancy = (token) => {
  return (dispatch) => {
    axios.get(`${occupancyAPI()}` , {headers:{'authorization':token}})
    .then((res) => {
        dispatch({
          type: GET_OCCUPANCY_SUCCESS,
          payload: JSON.parse(res.data),
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_OCCUPANCY_FAILURE,
        })
    });
  };
};