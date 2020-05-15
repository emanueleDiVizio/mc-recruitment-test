import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HandWashComponent from '../components/HandWash/HandWashComponent'
import HandWashHistory from '../components/HandWashHistory/HandWashHistory'
import ShiftController from '../components/ShiftController/ShiftController'

const HandWashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.textContainer}>Hand Wash Timer</Text>
    <View style={styles.interactionContainer}>
      <View style={styles.handWashContainer}>
        <HandWashComponent defaultDelay={200} />
      </View>
      <View style={styles.shiftContainer}>
        <ShiftController />
      </View>
    </View>
    <View style={styles.handWashContainer}>
      <HandWashHistory />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: { flex: 1 },
  interactionContainer: { flex: 1, flexDirection: 'row' },
  handWashContainer: { flex: 1, margin: 16 },
  shiftContainer: { flex: 1, margin: 16 },
  historyContainer: { flex: 1 },
})

export default HandWashScreen
