import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
 
const SignInScreen = ({ onSignIn, navigation }) => {
  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')

  console.log('SIGN IN', onSignIn)
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>App Template</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => SetPassword(text)}/>
        </View>
        <TouchableOpacity>
          <Text 
            style={styles.forgot} 
            onPress={() => navigation.navigate('Password Forget')}
            >
              Forgot Password?
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText} onPress={onSignIn}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text 
            style={styles.loginText}
            onPress={() => navigation.navigate('Sign Up')}
          >
              Signup
          </Text>
        </TouchableOpacity>
      </View>
    // <View style={styles.container}>
    //   <Text>Public Sign In Screen</Text>
    //   <Button title="Sign In" onPress={onSignIn} />

    //   <Text>OR</Text>

    //   <Button
    //     title="Go to Sign Up"
    //     onPress={() => navigation.navigate('Sign Up')}
    //   />
    //   <Button
    //     title="Go to Password Forget"
    //     onPress={() => navigation.navigate('Password Forget')}
    //   />
    // </View>
  );
};
 
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  loginBtnText:{
    color:"black"
  }
});