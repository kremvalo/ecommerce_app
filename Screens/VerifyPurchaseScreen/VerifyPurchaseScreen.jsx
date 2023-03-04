import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colores, FontSize } from "../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../../Components/Logo";

import { Button } from "react-native-paper";
import ButtonComponent from "../../Components/ButtonComponent";
import InputComponent from "../../Components/InputComponent";
import { URL_API } from "@env";
import axios from "axios";
import { handleChange, handleSubmit } from "../../Controllers";
import { validateEmail, validatePassword } from "../../utils/Validate";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { toastGenerate } from "../../utils/ToastGenerate";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setDataUser, setJwt } from "../../redux/actions";
import useColors from "../../utils/hooks/useColors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from 'react-native';
import { useFonts } from "expo-font";
import * as Font from "expo-font";




function VerifyPurchaseScreen() {

  const { colorApp } = useColors();
  

  const subtotal = 8.800;
  const envio = 5.000;
  const total = subtotal + envio;
  

  const styles = StyleSheet.create({
    // ...otros estilos
    textButton: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 30,
      marginTop: 7
    },
    payButton: {
      backgroundColor: colorApp,
      marginLeft: 100,
      marginRight: 100,
      marginBottom: 90,
      width: 360,
      height: 40,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      justifyContent: 'center',
      flexDirection: 'row',
    },    
  });


  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <View style={{
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 200,
        marginTop: 100,
        flexDirection: "row",
        
      }}>
        <Image style={{
          width: 15,
          height: 15,
          marginRight: 10,
          marginTop: 8,
        }} source={require("../VerifyPurchaseScreen/Mask.png")} />
        <Text style={{
          fontSize: 15,
          fontWeight: "bold",
          marginLeft: 0,
          marginTop: 5,
          flexDirection: "row",                   
        }}>Carrito de compras</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{
          fontSize: 15,
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          marginLeft: 15,
          marginTop: 20,
          marginBottom: 10,
          flexDirection: "row",
            
          color: "#777"
        }}>Paga con el medio de pago que prefieras
        </Text>
        <Image
          source={require("../VerifyPurchaseScreen/mercadolibre.png")}
          style={{
            marginLeft: 10,
            width: 25,
            height: 25,
            marginTop: 10
          }}
        />
      </View>

      <View >
        <Image source={require("../VerifyPurchaseScreen/mediosdepago2.png")} />
        <Image style={{
          alignItems: "center"
        }}
          source={require("../VerifyPurchaseScreen/mediosdepago.png")}
        />
      </View>

      <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
        <View
          style={{
            height: 2,
            backgroundColor: '#D5D8D5',
            marginVertical: 20,
            marginLeft: 15,
            marginTop: 10
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 20,
            color: "gray",
            marginLeft: 20,
            marginTop: 5
          }}>Subtotal:</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 25,
            color: "black",
            textAlign: "right",
            marginRight: 20
          }}>${subtotal.toFixed(3)}
          </Text>
        </View >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{
          fontSize: 15,
          fontWeight: "bold",
          marginBottom: 1,
          color: "gray",
          marginLeft: 20
        }}>Envio:</Text>
        <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 25,
            color: "black",
            textAlign: "right",
            marginRight: 20
          }}>${envio.toFixed(3)}

        </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#D5D8D5",
            marginVertical: 20,
            marginLeft: 10,
            marginTop: 1,
            width: widthPercentageToDP(90)
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 25,
            color: "gray",
            marginLeft: 20,
          }}>Total:</Text>
          <Text style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 25,
            color: "black",
            textAlign: "right",
            marginRight: 20
          }}>${total.toFixed(3)}</Text>
        </View>

      </View>
      <TouchableOpacity style={styles.payButton}>
        <Image style={{
          width: 20,
          height: 20,
          marginRight: 1,
          marginTop: 10,
        }} source={require("../VerifyPurchaseScreen/carritoBlanco.png")} />
        <Text style={[styles.textButton, { marginLeft: 10 }]}>Pagar</Text>
      </TouchableOpacity>
    </View>



  );
}

export default VerifyPurchaseScreen;

