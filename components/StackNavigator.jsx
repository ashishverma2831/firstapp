import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import Browse from '../screens/Browse';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerRight: () => {
              return (
                <Icon name="login-variant" size={28}
                  onPress={() => navigation.navigate('Login')}
                />
              )
            }
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Sign In',
          header: () => null
        }} />

        <Stack.Screen name="SignUp" component={SignUp} options={{
          title: 'Sign Up',
          header: () => null
        }} />

        <Stack.Screen name="Browse" component={Browse} options={{
          title: 'Browse',
          header: () => null
        }} />

      </Stack.Navigator>
    </>
  )
}

export default StackNavigator