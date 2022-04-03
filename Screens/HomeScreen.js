
import React from 'react'
import {KeyboardAvoidingView,
          StyleSheet,
          Text,
          View,
          TextInput,
          TouchableOpacity,
          Image,} from 'react-native'
import CalendarIcon from "react-calendar-icon";
import {NavigationContainer} from "@react-navigation/native";

import { LoginScreen } from "./LoginScreen";




export default function HomeScreen ({navigation: {navigate}}) {

    return (
            <View styles={{backgroundColor: '#FFFFFF'}}>
                <TouchableOpacity style={styles.text} onPress={() => navigate("Login")} >
                          <Text style={styles.scris1}>Logout</Text>
                </TouchableOpacity>
                <Image style={styles.Computer} source={ require('../assets/Calculator.png') } />

                <TouchableOpacity style={styles.butonLogout} onPress={() => navigate("Comenzi")} >
                           <Text style={styles.scris}>Comenzi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.butonComenzi} onPress={() => navigate("MeniuStoc")} >
                                           <Text style={styles.scris}>Stoc</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const styles = StyleSheet.create({
    text:{
            borderRadius: 20,
            backgroundColor:"#FF7F50",
            marginTop:50,
            height:40,
            marginLeft:285,
            width:"25%",
            justifyContent: 'center',
            alignItems: 'center',

    },

     scris1:{
            color:"white",
            fontSize:18,
        },
    scris:{
        color:"white",
        fontSize:18,
    },

    Computer:{
    marginTop:100,
    width:450,
    height:250},

    Screen:{
        color:"white",
    },
    butonLogout:{
        color: "white",
        fontWeight: "700",
        paddingTop:15,
        borderRadius: 20,
        marginTop:30,
        marginLeft:30,
        paddingBottom:15,
        paddingLeft: 40,
        width: "40%",
        backgroundColor: "#0782F9",
    },
    butonComenzi:{
            color: "white",
            fontWeight: "700",
            paddingTop:15,
            borderRadius: 20,
            marginLeft:225,
            paddingBottom:15,
            margin:-56,
            paddingLeft: 60,
            width: "40%",
            backgroundColor: "#0782F9",
    }
    })

