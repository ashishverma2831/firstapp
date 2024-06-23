import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        
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