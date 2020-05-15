import React from 'react'

import { Provider } from 'react-redux'
import createStore from './config/store'
import HandWashScreen from './screens/HandWashScreen'

const store = createStore()

export default () => (
  <Provider store={store}>
    <HandWashScreen />
  </Provider>
)
