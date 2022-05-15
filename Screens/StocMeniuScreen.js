import React from 'react'
import {KeyboardAvoidingView,
          StyleSheet,
          Text,
          View,
          TextInput,
          TouchableOpacity,
          Image,} from 'react-native'
import CalendarIcon from "react-calendar-icon";

export default function StocMeniuScreen ({ navigation: { navigate } }) {
  return (
    <View>
         <TouchableOpacity style={styles.butonMateriale} onPress={() => navigate("Inventar Materiale")} >
             <Text style={styles.scris}>Materiale</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.butonStoc} onPress={() => navigate("Stoc")} >
             <Text style={styles.scris1}>Stoc</Text>
         </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
butonMateriale:{
        color: "white",
        fontWeight: "700",
        paddingTop:15,
        borderRadius: 20,

        marginLeft:125,
        marginTop:140,
        width: "40%",
        backgroundColor: "#FF7F50",
    },

scris:{
        color:"white",
        fontSize:18,
        paddingBottom:15,
        paddingLeft: 45,

    },
    scris1:{
            color:"white",
            fontSize:18,
            paddingBottom:15,
            paddingLeft: 65,

        },

    butonStoc:{
                color: "white",
                fontWeight: "700",
                paddingTop:15,
                borderRadius: 20,

                marginLeft:125,
                marginTop:100,
                width: "40%",
                backgroundColor: "#FF7F50",
            },
})