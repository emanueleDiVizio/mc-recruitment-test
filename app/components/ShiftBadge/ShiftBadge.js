import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import useInterval from '../../hooks/useInterval'
import config from '../../config'
import moment from 'moment'

const lastShiftSelector = state => state.shifts.slice(-1)[0]

const ShiftBadge = () => {
  const lastShift = useSelector(lastShiftSelector)

  const [currentTime, setCurrentTime] = useState(moment())
  const [isOnShift, setIsOnShift] = useState(false)

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

  return isOnShift ? (
    <View style={styles.container}>
      <Text style={styles.text}>
        Currently on shift and receiving reminders
      </Text>
    </View>
  ) : (
    <React.Fragment />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginRight: 24,
    marginLeft: 24,
    borderRadius: 4,
    backgroundColor: config.colors.main,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: 6,
    fontSize: 17,
  },
})

export default ShiftBadge
