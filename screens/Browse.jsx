import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const Browse = () => {
    const navigation = useNavigation();
  return (
    <>
        <View style={{marginTop:100}}>
        <Button title="Back to Home" onPress={()=>{navigation.navigate('Home')}}> </Button>

        <Text>Browse</Text>
        </View>
    </>
  )
}

export default Browse