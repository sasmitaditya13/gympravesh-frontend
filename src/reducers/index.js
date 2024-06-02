import { combineReducers } from 'redux'
import exampleReducer from './exampleReducer'
import getdata from './getdata'
import filters from './filters'
import getLog from './getLog'
import getchart from './getchart'

const rootReducers = combineReducers({
  exampleReducer,
  getdata,
  filters,
  getLog,
  getchart
})

export default rootReducers
