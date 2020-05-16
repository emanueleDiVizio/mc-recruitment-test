import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
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
    isOnShift
      ? dispatch(shiftSlice.actions.endShift())
      : dispatch(shiftSlice.actions.startShift())
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

  const computeStyles = onShift => ({
    backgroundColor: onShift ? config.colors.accent : config.colors.main,
  })

  return (
    <TouchableOpacity
      testID="shift-button"
      style={[computeStyles(isOnShift), styles.container]}
      onPress={onUserPressButton}
    >
      <Text style={styles.text}>{isOnShift ? 'End Shift' : 'Start shift'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { height: -4 },
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 17,
  },
})

export default ShiftController
