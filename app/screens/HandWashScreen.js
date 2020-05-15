import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HandWashComponent from '../components/HandWash/HandWashComponent'
import HandWashHistory from '../components/HandWashHistory/HandWashHistory'

const HandWashScreen = () => (
  <View style={styles.container}>
    <Text style={{ flex: 1 }}>Hand Wash Timer</Text>
    <View style={{ flex: 1 }}>
      <HandWashComponent defaultDelay={200} />
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
