import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HandWashComponent from '../components/HandWash/HandWashComponent'

const HandWashScreen = () => (
  <View style={styles.container}>
    <Text>Hand Wash Timer</Text>
    <HandWashComponent />
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
