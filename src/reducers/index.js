import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'
import getdata from './getdata'

const rootReducers = combineReducers({
  exampleReducer,
  getdata
})

export default rootReducers
