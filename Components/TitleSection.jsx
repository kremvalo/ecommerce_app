import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { colores, FontSize } from "../utils/material";

const offer = "../assets/categoria.png";

const TitleSection = ({ hasIcon = false, title, bottom = 16 }) => (
  <View style={[styles.container, { marginBottom: bottom }]}>
    {hasIcon && <Image style={styles.textImage} source={require(offer)} />}
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.neutro,
    fontSize: FontSize.medium,
  },
  textImage: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TitleSection;
