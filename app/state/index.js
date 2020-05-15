import { combineReducers } from 'redux'
import handWash from './handWashSlice'

const reducer = combineReducers({
  handWash: handWash.reducer,
})

export default reducer
