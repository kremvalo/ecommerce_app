import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../../Components/Logo";

import useColors from "../../utils/hooks/useColors";

export default function Contactanos({ navigation }) {
  const { colorApp } = useColors();
  return (
    <View style={[styles.container]}>
      <View style={styles.box}>
        <Logo src={require("../../assets/LogoRojo.png")} />

        <Text style={styles.textR}>Contáctanos</Text>
        <Text style={styles.textN}>+57 312 000 11 22</Text>
        <Text style={styles.textN}>Calle 45a #27-85 Bogotá, Colombia</Text>

        <Text style={styles.textN}>correo@vherona.com</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: widthPercentageToDP(90),
          }}
        >
          <Image
            style={{
              width: widthPercentageToDP(15),
              height: widthPercentageToDP(15),
              resizeMode: "contain",
            }}
            source={require("../../assets/icons/instagram.png")}
          />
          <Image
            style={{
              width: widthPercentageToDP(15),
              height: widthPercentageToDP(15),
              resizeMode: "contain",
            }}
            source={require("../../assets/icons/facebook.png")}
          />
          <Image
            style={{
              width: widthPercentageToDP(15),
              height: widthPercentageToDP(15),
              resizeMode: "contain",
            }}
            source={require("../../assets/icons/link.png")}
          />
          <Image
            style={{
              width: widthPercentageToDP(15),
              height: widthPercentageToDP(15),
              resizeMode: "contain",
            }}
            source={require("../../assets/icons/tiktok.png")}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.atras}>Atras</Text>
        </TouchableOpacity>
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
            source={require("../../assets/2-rojo.png")}
          />
          <Image
            style={heightPercentageToDP(100) <= 600 ? { ...styles.image } : {}}
            source={require("../../assets/1-rojo.png")}
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
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.medium,
    color: colores.text,
  },
  textN: {
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.text,
  },
  image: {
    height: heightPercentageToDP(20),
    resizeMode: "contain",
  },
  image2: {
    height: heightPercentageToDP(15),
    resizeMode: "contain",
  },
  atras: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.primary,
  },
});
