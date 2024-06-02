import { Item } from "semantic-ui-react"
import { GET_ENTRY_LOG_SUCCESS, GET_ENTRY_LOG_FAILURE } from "../constants/actions"

const initialState = {
    data : [{id:"1",enrollment:"123" , name:"DUMMMY", deg:"BS-MS", bhawan:"JB", entry:"16:00", exit:"---", active:"IN"},
    {id:"2",enrollment:"123" , name:"DUMMY", deg:"BS-MS", bhawan:"JB", entry:"16:00", exit:"---", active:"IN"},
    {id:"3",enrollment:"123" , name:"Dummy", deg:"BS-MS", bhawan:"JB", entry:"16:00", exit:"---", active:"OUT"}]
}

const getLog = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY_LOG_SUCCESS:
        return {...state,
        data : action.payload};
    case GET_ENTRY_LOG_FAILURE:
        return {...state};
    default:
      return state
  }
}

export default getLog
