import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import config from '../../config'

const TopBar = ({ title = config.headerTitle  }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: config.colors.main,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: { color: 'white', marginBottom: 12, fontSize: 17 },
  icon: { flexDirection: 'row' },
})

export default TopBar
