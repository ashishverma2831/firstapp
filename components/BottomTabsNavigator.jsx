import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import SignUp from '../screens/SignUp';
import LoginScreen from '../screens/LoginScreen';
import Browse from '../screens/Browse';
import HomeScreen from '../screens/HomeScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={tabBarStyles.container}>
            {
                state.routes.map((route, index) => {
                    return <MyTab 
                    key={route.key} 
                    route={route} 
                    active={index===state.index} 
                    navigation={navigation}
                    />
                })
            }
        </View>
    )
}

const MyTab = ({ route, active, navigation }) => {

    const icons = {
        home: 'home',
        signup: 'signup',
        login: 'login',
        about: 'information-outline'
    }

    const handlePress = ()=>{
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!active && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
    }

    return <TouchableOpacity style={tabStyles.container} onPress={handlePress}>
        <MaterialIcon name={icons[route.name]} size={30} color={active?'yellow':'black'} />
        <Text >{route.name}</Text>
    </TouchableOpacity>
}

const tabStyles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        width: '25%',
        alignItems: 'center'
    }
})

const BottomTabsNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={MyTabBar}>
            <Tab.Screen name='about' component={AboutScreen} />
            <Tab.Screen name='signup' component={SignUp} />
            <Tab.Screen name='login' component={LoginScreen} />
            {/* <Tab.Screen name='browse' component={Browse} /> */}
            <Tab.Screen name='home' component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator



const styles = StyleSheet.create({})
const tabBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})