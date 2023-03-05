import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import useColors from "../utils/hooks/useColors";
import { colores, FontSize } from "../utils/material";

const SIZES = ["small", "medium", "large"];
const TYPES = ["rojo", "blanco", "verde", "transparente"];
const ROUNDED = ["small", "medium", "large"];

export default function ButtonComponent({
  onPress,
  type,
  size,
  label,
  widthSize,
  rounded,
  style,
  buttonDisabled,
}) {
  const { colorApp } = useColors();
  const btnSize = SIZES.includes(size) ? size : "small";
  const btnType = TYPES.includes(type) ? type : "primary";
  const btnRound = ROUNDED.includes(rounded) ? rounded : "small";

  const btnStyle = {
    ...style,
    height: hp(5),
    width: widthSize
      ? widthSize
      : btnSize === "large"
      ? wp(80)
      : btnSize === "medium"
      ? wp(50)
      : wp(20),
    borderRadius: btnRound === "small" ? 5 : btnRound === "medium" ? 10 : 50,
    marginVertical: hp(0.5),
    paddingHorizontal: wp(0.5),
    paddingVertical: hp(0.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonDisabled
      ? colores.neutro
      : btnType === "transparente"
      ? "transparent"
      : btnType === "rojo"
      ? colorApp
      : btnType === "verde"
      ? colores.success
      : btnType === "blanco"
      ? colores.white
      : colorApp,
  };
  return (
    <TouchableOpacity
      disabled={buttonDisabled}
      style={btnStyle}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          color:
            btnType === "transparente"
              ? colores.white
              : btnType === "rojo"
              ? colores.white
              : btnType === "verde"
              ? colores.white
              : btnType === "blanco"
              ? colorApp
              : colores.white,
          fontSize:
            btnSize === "large"
              ? FontSize.medium
              : btnSize === "medium"
              ? FontSize.small
              : FontSize.Esmall,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
