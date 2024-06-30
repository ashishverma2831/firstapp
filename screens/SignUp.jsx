import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const SignUp = () => {

    const navigation = useNavigation();

  return (  
    <>
        <View style={{marginTop:100}}>
        <Button title="Back to Home" onPress={()=>{navigation.navigate('Home')}}> </Button>

        <Text>SignUp</Text>
        </View>
    </>
  )
}

export default SignUp