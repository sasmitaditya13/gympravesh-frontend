import {
GET_OCCUPANCY_FAILURE , GET_OCCUPANCY_SUCCESS
} from '../constants/actions'

const initialState = {
    data: {
    total_occupancy: 10,
    ug_occupancy: 0,
    pg_staff_occupancy: 0,
    male_occupancy: 0,
    female_occupancy: 0,
    daily_visits: {total_visits:1 , ug_visits:2, pg_staff_visits:3, male_visits:4, female_visits:5},
    weekly_visits:null,
    monthly_visits:null
    }
}

const getdata = (state = initialState, action) => {
  switch (action.type) {
    case GET_OCCUPANCY_SUCCESS:
      return {
        ...state,
        data : action.payload
        
      };
    case GET_OCCUPANCY_FAILURE:
      return {
        ...state
      };
    default:
        return state
  }
}

export default getdata