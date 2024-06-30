import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={{padding:50}}>
        <Text style={{textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
        }}> My First React Native App </Text>
        <View style={{marginTop:20}}>
            <Button title='Ready to Rock' />
        </View>
    </View>
  )
}

export default HomeScreen