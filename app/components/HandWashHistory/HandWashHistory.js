import React from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList, Text } from 'react-native'

const handWashHistorySelector = state => state.handWashes

const HandWashItem = ({ endTime }) => {
  return (
    <View>
      <Text>Handwash completed on {new Date(endTime).toString()}</Text>
    </View>
  )
}

const HandWashHistory = () => {
  const data = useSelector(handWashHistorySelector)
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <HandWashItem endTime={item.endTime} />}
        keyExtractor={item => item.endTime.toString()}
      />
    </View>
  )
}

export default HandWashHistory
