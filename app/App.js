import React, { useEffect } from 'react'

import { Provider } from 'react-redux'
import createStore from './config/store'
import HandWashScreen from './screens/HandWashScreen'
import notificationService from './services/NotificationService'
const store = createStore()

const App = () => {
  useEffect(() => {
    notificationService.setUpService(() => {})
    return () => {
      notificationService.tearDownService()
    }
  }, [])

  return (
    <Provider store={store}>
      <HandWashScreen />
    </Provider>
  )
}

export default App
