import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HandWashComponent from '../components/HandWash/HandWashComponent'
import HandWashHistory from '../components/HandWashHistory/HandWashHistory'
import ShiftController from '../components/ShiftController/ShiftController'

const HandWashScreen = () => (
  <View style={styles.container}>
    <Text style={{ flex: 1 }}>Hand Wash Timer</Text>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, margin: 16 }}>
        <HandWashComponent defaultDelay={200} />
      </View>
      <View style={{ flex: 1, margin: 16 }}>
        <ShiftController />
      </View>
    </View>
    <View style={{ flex: 1 }}>
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
})

export default HandWashScreen
