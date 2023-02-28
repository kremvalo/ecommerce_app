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
import useColors from "../utils/hooks/useColors";

export default function InicioMenu({ navigation, route }) {
  const { filter } = route.params;
  const { colorApp } = useColors();
  return (
    <View style={[styles.container]}>
      <View style={styles.box}>
        <Logo src={require("../assets/LogoRojo.png")} />
        <View style={{ alignItems: "center" }}>
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="rojo"
            size="large"
            label="Registrate"
            rounded="large"
            onPress={() => {
              navigation.navigate("RegisterScreen", { filter });
            }}
          />
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="rojo"
            size="large"
            label="Inicia sesión"
            rounded="large"
            onPress={() => {
              navigation.navigate("IniciarSesion");
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.textR}>Atras</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
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
    width: widthPercentageToDP(90),
    flex: 1,
    justifyContent: "space-between",
  },
  textR: {
    marginTop: heightPercentageToDP(1),
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
