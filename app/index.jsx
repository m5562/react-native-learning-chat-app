import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const OnBoard = () => {
  return (
    <View>
      <Text>OnBoard</Text>
      <Link href={"/(protected)"}>hello</Link>
    </View>
  )
}

export default OnBoard