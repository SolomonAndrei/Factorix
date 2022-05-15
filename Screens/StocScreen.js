import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function StocScreen ({ navigation: { navigate } }) {
 return (
     <View>
     <Text style={styles.detalii}>Adaugă Stoc aici</Text>
         <TouchableOpacity style={styles.adaugare}>

            <Text style={styles.plus}>+</Text>
         </TouchableOpacity>
     </View>
   )
 }



 const styles = StyleSheet.create({
 plus:{
     fontSize:36,
     color:"white",
     marginLeft:32,
 },

 adaugare:{
 marginLeft:300,
     borderRadius: 25,
     marginTop:-40,
     backgroundColor: "green",
     width:"20%",
 },
 detalii:{
     fontSize:24,
     marginTop:50,
     marginLeft:70,
 }

 })