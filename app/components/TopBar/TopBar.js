import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import config from '../../config'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TopBar = ({ title = config.headerTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon name="cog" size={21} color="white" style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: config.colors.main,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    marginBottom: 12,
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
  },
  icon: { flexDirection: 'row', right: 12, bottom: 12, position: 'absolute' },
})

export default TopBar
