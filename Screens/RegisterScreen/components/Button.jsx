import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { colores, FontSize } from "../../../utils/material";

const Button = ({ disabled, isClient, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      { backgroundColor: isClient ? colores.primary : "#D1CAE2" },
    ]}
    disabled={disabled}
  >
    <Text
      style={[
        styles.textButton,
        { color: isClient ? colores.white : "#624F92" },
      ]}
    >
      Registrarse
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: hp(5),
    marginTop: hp(5),
    marginBottom: hp(2),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colores.error,
    borderTopEndRadius: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: FontSize.medium,
    fontWeight: "bold",
  },
});

export default Button;
