import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import shiftSlice from '../../state/shiftSlice'

const shiftStatusSelector = state => state.shift.onShift

const ShiftController = () => {
  const dispatch = useDispatch()
  const onUserPressButton = () => {
    dispatch(shiftSlice.actions.startShift())
  }
  const shiftStatus = useSelector(shiftStatusSelector)
  return (
    <View>
      <Text>
        Please press the button below to start your 8 hours shift, you will
        receive a notification to wash your hand every 2 hours. There is
        currently no way to end the shift prematurely.
      </Text>
      <Button
        onPress={onUserPressButton}
        testID="shift-button"
        title="Start shift"
        disabled={shiftStatus}
      />
      <Text>Shift status: {shiftStatus ? 'ON' : 'OFF'}</Text>
    </View>
  )
}

export default ShiftController
