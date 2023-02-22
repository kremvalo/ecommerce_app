import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { colores, FontSize } from "../utils/material";

const TitleSection = ({ hasIcon = false, title }) => (
  <View style={styles.container}>
    {hasIcon && <Image />}
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
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 16,
  },
});

export default TitleSection;
