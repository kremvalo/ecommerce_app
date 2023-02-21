import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { colores, FontSize } from "../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../Components/Logo";
import { Button } from "react-native-paper";
import ButtonComponent from "../Components/ButtonComponent";
import InputComponent from "../Components/InputComponent";
import { useFocusEffect } from "@react-navigation/native";
import useColors from "../utils/hooks/useColors";

export default function CargaInicioSesion({ navigation }) {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate("HomeNav");
      }, 2000);
    }, [])
  );
  const { colorApp } = useColors();
  return (
    <View style={[styles.container, { backgroundColor: colorApp }]}>
      <View style={styles.box}>
        <Logo src={require("../assets/logo-solo.png")} />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.textN}>
            Danos un momento, estamos trabajando para que sigas creando tu mejor
            versión.
          </Text>
        </View>

        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colores.primary,
  },
  box: {
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    width: widthPercentageToDP(70),
    flex: 1,
    justifyContent: "flex-start",
  },
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  textN: {
    textAlign: "center",
    marginTop: heightPercentageToDP(3),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  image: {
    bottom: heightPercentageToDP(2),
    right: widthPercentageToDP(0),
    position: "absolute",
  },
  image2: {
    bottom: heightPercentageToDP(0),
    left: widthPercentageToDP(0),
    position: "absolute",
  },
});
