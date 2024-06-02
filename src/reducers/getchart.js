import { GET_CHART_DATA_SUCCESS, GET_CHART_DATA_FAILURE } from "../constants/actions"

const initialState = {
  male:{morning : {ug:[0,0,0,0,0,0,0] , pg:[0,0,0,0,0,0,0]} , evening : {ug:[0,0,0,0,0,0,0] , pg:[0,0,0,0,0,0,0]}},
  female:{morning : {ug:[0,0,0,0,0,0,0] , pg:[0,0,0,0,0,0,0]} , evening : {ug:[0,0,0,0,0,0,0] , pg:[0,0,0,0,0,0,0]}},
  morningLabel : ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM" , "12 PM"],
  eveningLabel: ["3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM" , "9 PM"]
}

const getchart = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHART_DATA_SUCCESS:
      return {...state,
      male:action.payload.male,
      female:action.payload.female}
    default:
      return state
  }
}

export default getchart
