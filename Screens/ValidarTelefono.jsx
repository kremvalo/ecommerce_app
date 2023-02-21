import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../Components/Logo";
import { Button } from "react-native-paper";
import ButtonComponent from "../Components/ButtonComponent";
import InputComponent from "../Components/InputComponent";

export default function ValidarTelefono({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textN}>
            Sabemos que eres tú, pero para estar tranquilos hemos enviado un
            código de validación a tu teléfono +57 ### ### ##72
          </Text>
          <InputComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            placeholder="Codigo"
            size="medium"
            type="rojo"
          />
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(8) }}
            type="rojo"
            size="medium"
            label="Validar"
            rounded="large"
            onPress={() => {
              navigation.replace("CargaInicioSesion");
            }}
          />
        </View>
        <View
          style={{
            marginTop: heightPercentageToDP(10),
            flexDirection: "row",
            alignItems: "flex-end",
            width: widthPercentageToDP(90),
            justifyContent:
              heightPercentageToDP(100) <= 600 ? "center" : "space-between",
          }}
        >
          <Image
            style={heightPercentageToDP(100) <= 600 ? { ...styles.image2 } : {}}
            source={require("../assets/2-rojo.png")}
          />
          <Image
            style={heightPercentageToDP(100) <= 600 ? { ...styles.image } : {}}
            source={require("../assets/1-rojo.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    backgroundColor: colores.background,
  },
  box: {
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    width: widthPercentageToDP(80),
    flex: 1,
    justifyContent: "flex-end",
  },
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.medium,
    color: colores.primary,
  },
  textN: {
    textAlign: "center",
    marginTop: heightPercentageToDP(3),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.primary,
  },
  image: {
    height: heightPercentageToDP(20),
    resizeMode: "contain",
  },
  image2: {
    height: heightPercentageToDP(15),
    resizeMode: "contain",
  },
});
