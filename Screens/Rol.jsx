import { Image, StyleSheet, Text, View } from "react-native";
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

export default function Rol({ navigation }) {
  const { colorApp } = useColors();
  return (
    <View style={[styles.container, { backgroundColor: colorApp }]}>
      <View style={styles.box}>
        <Logo src={require("../assets/logo-solo.png")} />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textR}>¿Para quién comprarás?</Text>
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="blanco"
            size="large"
            label="Para mi"
            rounded="large"
            onPress={() => {
              navigation.navigate("InicioMenu", { filter: "cliente" });
            }}
          />
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="blanco"
            size="large"
            label="Para mi negocio"
            rounded="large"
            onPress={() => {
              navigation.navigate("InicioMenu", { filter: "negocio" });
            }}
          />
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="blanco"
            size="large"
            label="Volver"
            rounded="large"
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </View>
        <View
          style={{
            width: widthPercentageToDP(90),
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent:
              heightPercentageToDP(100) <= 600 ? "center" : "space-between",
          }}
        >
          <Image
            style={heightPercentageToDP(100) <= 600 ? styles.image3 : {}}
            source={require("../assets/3.png")}
          />
          <View>
            <Image
              style={heightPercentageToDP(100) <= 600 ? styles.image : {}}
              source={require("../assets/5.png")}
            />
            <Image
              style={heightPercentageToDP(100) <= 600 ? styles.image2 : {}}
              source={require("../assets/1.png")}
            />
          </View>
        </View>
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
    width: widthPercentageToDP(90),
    flex: 1,
    justifyContent: "space-between",
  },
  textR: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  image: {
    height: heightPercentageToDP(20),
    resizeMode: "contain",
  },
  image2: {
    height: heightPercentageToDP(15),
    resizeMode: "contain",
  },
  image3: {
    height: heightPercentageToDP(10),
    resizeMode: "contain",
  },
});
