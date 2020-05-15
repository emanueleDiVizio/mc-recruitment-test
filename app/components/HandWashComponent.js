import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import useInterval from '../hooks/useInterval'
import PropTypes from 'prop-types'

const HandWashComponent = ({ defaultDelay = 1000 }) => {
  const [timerCount, setTimerCount] = useState(0)
  const [delay, setDelay] = useState(null)
  const [handWashCompleted, setHandWashCompleted] = useState(false)

  const onUserPressButton = () => {
    setDelay(defaultDelay)
  }

  const onHandWashComplete = () => {
    setDelay(null)
    setHandWashCompleted(true)
  }

  useEffect(() => {
    if (timerCount === 20) {
      onHandWashComplete()
    }
  }, [timerCount])

  useInterval(() => {
    setTimerCount(timerCount + 1)
  }, delay)

  return (
    <View>
      <Text>Please press the button below to start the timer</Text>
      <Button onPress={onUserPressButton} testID="timer-button">
        Timer
      </Button>
      <Text testID="timer-counter">{timerCount}</Text>
    </View>
  )
}

HandWashComponent.propTypes = {
  defaultDelay: PropTypes.number,
}

export default HandWashComponent
