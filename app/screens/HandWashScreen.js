import React from 'react'
import { View, StyleSheet } from 'react-native'
import HandWash from '../components/HandWash/HandWash'
import HandWashHistory from '../components/HandWashHistory/HandWashHistory'
import TopBar from '../components/TopBar/TopBar'
import ShiftController from '../components/ShiftController/ShiftController'

const HandWashScreen = () => (
  <View style={styles.container}>
    <TopBar />
    <View style={styles.interactionContainer}>
      <View style={styles.handWashContainer}>
        <HandWash />
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
  },
  textContainer: { flex: 1 },
  interactionContainer: { flex: 1, flexDirection: 'row' },
  handWashContainer: { flex: 1, margin: 16 },
  shiftContainer: { flex: 1, margin: 16 },
  historyContainer: { flex: 1 },
})

export default HandWashScreen
