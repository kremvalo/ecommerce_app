import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { colores } from "../utils/material";
import useColors from "../utils/hooks/useColors";

export default function Header({ back }) {
  const { colorApp } = useColors();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              color={colores.text}
              size={heightPercentageToDP(2)}
              style={{ width: widthPercentageToDP(6) }}
            />
          </TouchableOpacity>
        )}
        <Image
          style={styles.logo}
          source={
            colorApp === "#9787BF"
              ? require("../assets/icono-morado.png")
              : require("../assets/icono-rojo.png")
          }
        />
      </View>

      <View style={styles.buttonRight}>
        <TouchableOpacity
          onPress={() => navigation.getParent("RightDrawer").openDrawer()}
        >
          <Entypo name="menu" color={colorApp} size={heightPercentageToDP(3)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FBEDED",
    paddingVertical: 9,
    paddingHorizontal: widthPercentageToDP(6),
  },
  main: { flexDirection: "row", alignItems: "center" },
  logo: {
    width: heightPercentageToDP(5),
    height: heightPercentageToDP(5),
    resizeMode: "cover",
  },
  buttonRight: {
    width: widthPercentageToDP(18),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
