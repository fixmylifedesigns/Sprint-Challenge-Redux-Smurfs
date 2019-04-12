import {combineReducers} from "redux";
import {smurfReducer} from './smurfReducer'
import {addReducer} from './addReducers'

export default combineReducers({
  smurfReducer,
  addReducer
})
