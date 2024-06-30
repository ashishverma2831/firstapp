import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{padding:50}}>
        <Text style={{textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
        }}> My First React Native App </Text>
        <View style={{marginTop:20}}>
            <Button title='Ready to Rock' />
        </View>

        <View style={styles.routesContainer}>
          <Button title='SignUp' onPress={()=>{navigation.navigate('SignUp')}} />
          <Button title='Login' onPress={()=>{navigation.navigate('Login')}}/>
          <Button title='Browse' onPress={()=>{navigation.navigate('Browse')}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  routesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50
  }
})

export default HomeScreen