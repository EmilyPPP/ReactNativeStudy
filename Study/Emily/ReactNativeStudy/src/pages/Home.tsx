import { View, Text, Button } from 'react-native'
import React from 'react'
import Props from '../models/Props'

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="상세보기"
        onPress={() => navigation.navigate('Detail', {id: 1})}
      />
      <Button
        title="과제 2"
        onPress={() => navigation.navigate('Work1_2', {id: 1})}
      />
    </View>
  )
}

export default Home