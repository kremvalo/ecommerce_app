import React, { useEffect, useRef } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput as Tx,
  Button,
  Pressable,
} from "react-native";

import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import useColors from "../utils/hooks/useColors";
const SIZES = ["small", "medium", "large"];
const TYPES = [
  "primary",
  "secondary",
  "accent",
  "error",
  "warning",
  "info",
  "success",
];
const ROUNDED = ["small", "medium", "large"];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function InputComponent({
  style,

  multiline,

  type,
  size,
  label,
  funOnblur,
  value,
  funOnfocus,
  rounded,
  widthSize,
  placeholder,
  onChange,
  error,
  msgerror,
  icon,
  funcion,
  password,
}) {
  const inputSize = SIZES.includes(size) ? size : "small";
  const { colorApp } = useColors();
  const refInput = useRef();
  const offset = useSharedValue(0);
  const fontset = useSharedValue(
    inputSize === "large"
      ? FontSize.medium
      : inputSize === "medium"
      ? FontSize.small
      : FontSize.Esmall
  );

  /*   const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  }); */
  const txtStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
      fontSize: fontset.value,
    };
  });

  useEffect(() => {
    fontset.value = withTiming(
      inputSize === "large"
        ? FontSize.medium
        : inputSize === "medium"
        ? FontSize.small
        : FontSize.Esmall
    );
  }, [inputSize]);
  useEffect(() => {
    if (value) {
      offset.value = withSpring(-6);
      fontset.value = withTiming(heightPercentageToDP(1));
    } else {
    }
  }, [value]);

  return (
    <Pressable
      onPress={() => refInput.current.focus()}
      style={{
        ...style,
        height: heightPercentageToDP(5),
        alignItems: "center",
        justifyContent: "flex-start",

        width: widthSize
          ? widthSize
          : inputSize === "large"
          ? wp(80)
          : inputSize === "medium"
          ? wp(50)
          : wp(30),
      }}
    >
      {console.log(value)}
      <Tx
        secureTextEntry={password}
        value={value}
        onChangeText={
          funcion
            ? (e) => funcion(e)
            : () => {
                console.log();
              }
        }
        ref={refInput}
        onFocus={() => {
          offset.value = withSpring(-6);
          fontset.value = withTiming(heightPercentageToDP(1));
        }}
        onBlur={() => {
          if (!value) {
            offset.value = withSpring(0);
            fontset.value = withTiming(
              inputSize === "large"
                ? FontSize.medium
                : inputSize === "medium"
                ? FontSize.small
                : FontSize.Esmall
            );
          }
        }}
        textAlign="center"
        style={{
          height: heightPercentageToDP(5),
          width: widthSize
            ? widthSize
            : inputSize === "large"
            ? wp(80)
            : inputSize === "medium"
            ? wp(50)
            : wp(30),
          borderColor: type === "rojo" ? colorApp : colores.white,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          textAlign: "center",
          color: type === "rojo" ? colorApp : colores.white,
          borderRadius: 50,
          paddingHorizontal: hp(1),
        }}
      />

      <Animated.Text
        style={[
          {
            top: 5,
            position: "absolute",
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
            color: type === "rojo" ? colorApp : colores.white,

            paddingVertical: heightPercentageToDP(0.2),
          },
          txtStyles,
        ]}
      >
        {inputSize === "large"
          ? error
            ? msgerror.slice(0, 50) + "..."
            : placeholder.slice(0, 30) + "..."
          : inputSize === "medium"
          ? error
            ? msgerror.slice(0, 35) + "..."
            : placeholder.slice(0, 20) + "..."
          : error
          ? msgerror.slice(0, 13) + "..."
          : placeholder.slice(0, 10) + "..."}
      </Animated.Text>
      {error && (
        <Text
          style={{
            fontSize: FontSize.Esmall,
            textAlign: "center",
            fontFamily: "Poppins_400Regular",
            color: colorApp,
          }}
        >
          {msgerror}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.005,
    justifyContent: "center",
  },
  text: {
    textAlign: "left",
    color: "#ffffff",
    fontWeight: "500",
  },
  box: {
    backgroundColor: "#000",
    paddingHorizontal: widthPercentageToDP(5),
  },
});
