import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login Page </Text>
        <TextInput placeholder="Enter your email" style={{backgroundColor:'white', margin:10, padding:10}}/>
        <TextInput placeholder="Enter your password" style={{backgroundColor:'white', margin:10, padding:10}}/>
        <Button title="Login" color="black" style />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       paddingVertical:50, 
       backgroundColor:'red',
       flex:1
    },
    text:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }
})

export default LoginScreen