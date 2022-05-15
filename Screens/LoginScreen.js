import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const API_URL = 'http://10.0.2.2:5000';

export default function LoginScreen({ navigation: { navigate } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
            setIsLogin(!isLogin);
            setMessage('');
        };

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(async res => {
                    try {
                        const jsonRes = await res.json();
                        if (res.status === 200) {
                            setMessage(jsonRes.message);
                        }
                    } catch (err) {
                        console.log(err);
                    };
                })
                .catch(err => {
                    console.log(err);
                });
        }
         const onSubmitHandler = () => {

                 const payload = {
                     email,
                     password,
                 };
                 fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                     },
                     body: JSON.stringify(payload),
                 })
                 .then(async res => {
                     try {
                         const jsonRes = await res.json();
                         if (res.status !== 200) {
                             setIsError(true);
                             setMessage(jsonRes.message);

                         } else {
                             onLoggedIn(jsonRes.token);
                             setIsError(false);
                             setMessage(jsonRes.message);
                             navigate("Home");
                         }
                     } catch (err) {
                         console.log(err);
                     };
                 })
                 .catch(err => {
                     console.log(err);
                 });
             };

            const getMessage = () => {
                    const status = isError ? `Error: ` : `Success: `;
                    return status + message;
                }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View >

    <Text style ={styles.NumeLogo}> Factorixx </Text>
    <Text style={styles.welcome}>{isLogin ? 'Login' : 'Signup'}</Text>
    </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        {!isLogin &&
        <TextInput
        style={styles.input}
        placeholder="ConfirmPassword"
        onChangeText={(text) => setPassword2(text)}
        secureTextEntry
        />}

      </View>
      <View style={styles.buttonContainer}>
      <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
        <TouchableOpacity onPress={onSubmitHandler} styles={styles.button}>
          <Text style={styles.buttonLogin}>{isLogin ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeHandler} styles={styles.button}>
          <Text style={styles.buttonRegister}>{isLogin ? 'Register' : 'Login'}</Text>
        </TouchableOpacity>


      </View>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",

  },
  inputContainer: {

    width: "80%",
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "white",
    width: "100%",
  },
  buttonLogin: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    borderRadius: 25,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft: 140,
    paddingRight: 140,
    width: "100%",
    backgroundColor: "#0782F9",
  },

  buttonRegister: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 15,
  },

  welcome:{
    marginLeft:35,
  fontSize: 20,
  fontWeight:"bold",
  color:"#0782F9",
  },
  NumeLogo:{
    marginBottom:60,
  fontSize: 30,
  fontWeight:"bold",
  color:"#FF7F50"
  },
  Nume:{
  marginTop:70,
   marginLeft:150,
   fontSize:16,
   color:"#FF7F50"
  }
});
