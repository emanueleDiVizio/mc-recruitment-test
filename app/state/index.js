import { combineReducers } from 'redux'
import handWash from './handWashSlice'

const reducer = combineReducers({
  handWashes: handWash.reducer,
})

export default reducer
