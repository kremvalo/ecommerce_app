import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: "#ffff",      
  }

})

function PurchaseStatusScreen() {

  const status = "pendiente"; 
  let backgroundColor;
  switch(status) {
    case "aprobado":
      backgroundColor = "#BCDB57"; 
      break;
    case "rechazado":
      backgroundColor = "#FF5A5F"; 
      break;
    case "pendiente":
      backgroundColor = "#CFECF2"; 
      break;
    default:
      backgroundColor = "#BCDB57"; 
  }


  return (
    <View style={{
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Image style={{
        width: 50,
        height: 50,
        marginRight: 10,
        marginTop: 8,
      }} source={require("../PurchaseStatusScreen/check.png")}>
      </Image>
      <Text style={[styles.text, {
        marginTop: 10,        
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Poppins_400Regular", 
      }]}
      >Lorem Ipsum</Text>
      <Text style={[styles.text,{
        marginTop: 10,                
        fontSize: 15,
        fontFamily: "Poppins_400Regular", 
      }]}
      >Lorem Ipsum</Text>
    </View>
    
  );
}

export default PurchaseStatusScreen;
