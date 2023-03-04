import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";

export default function SeccionCategoria({ categoria, subCategoria }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textT}>{categoria}</Text>
      <Text style={styles.textN}>{subCategoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(3),
    width: widthPercentageToDP(90),
    borderRadius: 12,
    backgroundColor: colores.ter,
    height: heightPercentageToDP(6),
    paddingHorizontal: widthPercentageToDP(8),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textT: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  textN: {
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.white,
  },
});
