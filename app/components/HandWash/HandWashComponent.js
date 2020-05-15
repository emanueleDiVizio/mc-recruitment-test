import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button } from 'react-native'
import useInterval from '../../hooks/useInterval'
import PropTypes from 'prop-types'
import config from '../../config'

import handWash from '../../state/handWashSlice'

const HandWashComponent = ({
  timerDelay = config.defaultTimerDelay,
  timerTimeout = config.defaultTimerTimeoutInSeconds,
}) => {
  const [timerCount, setTimerCount] = useState(0)
  const [delay, setDelay] = useState(null)
  const [handWashCompleted, setHandWashCompleted] = useState(false)

  const dispatch = useDispatch()

  const onUserPressButton = () => {
    setDelay(timerDelay)
  }

  const onTimeOut = () => {
    setDelay(null)
    setHandWashCompleted(true)
  }

  const onHandWashCompleted = () => {
    dispatch(handWash.actions.addHandWash())
    setTimerCount(0)
    setHandWashCompleted(false)
  }

  useEffect(() => {
    if (timerCount === timerTimeout) {
      onTimeOut()
    }
  }, [timerCount])

  useEffect(() => {
    if (handWashCompleted) {
      onHandWashCompleted()
    }
  }, [handWashCompleted])

  useInterval(() => {
    setTimerCount(timerCount + 1)
  }, delay)

  return (
    <View>
      <Text>Please press the button below to start the timer</Text>
      <Button
        onPress={onUserPressButton}
        testID="timer-button"
        title="Timer"
        disabled={timerCount > 0}
      />
      <Text testID="timer-counter">{timerCount}</Text>
    </View>
  )
}

HandWashComponent.propTypes = {
  timerDelay: PropTypes.number,
  timerTimeout: PropTypes.number,
}

export default HandWashComponent
