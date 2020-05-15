import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import shiftSlice from '../../state/shiftSlice'
import useInterval from '../../hooks/useInterval'
import config from '../../config'
import moment from 'moment'

const lastShiftSelector = state => state.shifts.slice(-1)[0]

const ShiftController = () => {
  const lastShift = useSelector(lastShiftSelector)

  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(moment())
  const [isOnShift, setIsOnShift] = useState(false)

  const onUserPressButton = () => {
    dispatch(shiftSlice.actions.startShift())
  }

  const updateTime = () => {
    setCurrentTime(moment())
  }

  useInterval(() => {
    updateTime()
  }, 1000)

  useEffect(() => {
    if (lastShift) {
      setIsOnShift(currentTime.isBefore(lastShift.endTime))
    }
  }, [currentTime])

  return (
    <View>
      <Text>
        Please press the button below to start your 8 hours shift, you will
        receive a notification to wash your hand every 2 hours. {'\n'}There is
        currently no way to end the shift prematurely.{'\n'}Current time is:{' '}
        {currentTime.format(config.defaultDateFormatString)}
      </Text>
      <Button
        onPress={onUserPressButton}
        testID="shift-button"
        title="Start shift"
        disabled={isOnShift}
      />
      <Text>
        Shift status:
        {isOnShift
          ? ` You are currently on shift until ${moment(
              lastShift.endTime
            ).format(config.defaultDateFormatString)}`
          : ` You're currently not on shift`}
      </Text>
    </View>
  )
}

export default ShiftController
