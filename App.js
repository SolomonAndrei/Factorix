import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import StocScreen from "./Screens/StocScreen";
import ComenziScreen from "./Screens/ComenziScreen";
import CalendarScreen from "./Screens/CalendarScreen";
import StocMeniuScreen from "./Screens/StocMeniuScreen";
import MaterialeScreen from "./Screens/MaterialeScreen";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen options={{ headerShown: false  }} name="Home" component={HomeScreen} />
        <Stack.Screen  name="Calendar" component={CalendarScreen}/>
        <Stack.Screen  name="Stoc" component={StocScreen}/>
        <Stack.Screen  name="Comenzi" component={ComenziScreen}/>
        <Stack.Screen  name="MeniuStoc" component={StocMeniuScreen}/>
        <Stack.Screen  name="Inventar Materiale" component={MaterialeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

