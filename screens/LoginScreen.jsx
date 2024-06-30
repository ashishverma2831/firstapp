import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon name='home' size={30} color={'#fff'} style={{
        marginTop: 50,
        marginLeft: 20
      }} onPress={() => navigation.navigate('Home')}
      />


      <View style={styles.logoContainer} >
        <Image resizeMode='contain' style={styles.icon} source={require('../assets/undraw_Login_re_4vu2.png')} />
      </View>
      <View style={styles.logoCard} >
        <View style={styles.formField}>
          <Text style={styles.inputLabel}> Email Address </Text>
          <TextInput placeholder="Enter your email" style={styles.input} />
        </View>
        <View style={styles.formField}>
          <Text style={styles.inputLabel}> Password </Text>
          <TextInput placeholder="Enter your password" style={styles.input} />
        </View>

        <Text style={styles.link1}>Forget Password</Text>
        {/* <Button title="Login" color="black" style={styles.submitBtn} /> */}

        <Pressable style={styles.submitBtn} onLongPress={() => { alert('Hello') }} >
          <Text style={styles.btnText} >Log in</Text>
        </Pressable>

        <Text style={{
          textAlign: 'center', marginVertical: 10,
          fontSize: 16
        }}>Or</Text>

        <View style={styles.iconContainer}>
          <View style={styles.socialIcon}>
            <Icon name="google" size={36} />
          </View>
          <View style={styles.socialIcon}>
            <Icon name="facebook-square" size={36} />
          </View>
          <View style={styles.socialIcon}>
            <Icon name="apple1" size={36} />
          </View>
        </View>

        <Text style={{ textAlign: 'center' }}>
          Don't have an account
          <Text style={styles.link2}>Sign up</Text>
        </Text>

      </View>
      {/* <Text style={styles.text}>Login Page </Text> */}
      {/* <TextInput placeholder="Enter your email" style={{backgroundColor:'white', margin:10, padding:10}}/> */}
      {/* <TextInput placeholder="Enter your password" style={{backgroundColor:'white', margin:10, padding:10}}/> */}
      {/* <Button title="Login" color="black" style /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    // paddingVertical: 50
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  socialIcon: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 10
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  submitBtn: {
    backgroundColor: '#ffca3c',
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  logoContainer: {
    flex: 2,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoCard: {
    flex: 3,
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  icon: {
    width: 150,
    height: 150,
    backgroundColor: '',
    borderRadius: 100,
  },
  input: {
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16
  },
  formField: {
    marginBottom: 20
  },
  inputLabel: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 16,
    color: '#555'
  },
  link1: {
    color: 'blue',
    textAlign: 'right',
    marginBottom: 10
  },
  link2: {
    color: 'blue',
    marginTop: 10,
    marginLeft: 10
  }
})

export default LoginScreen