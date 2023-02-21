import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { colores, FontSize } from "../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { cambiarSubCategorias } from "../redux/actions";

export default function Categoria({ categoria, title, imagen, width = 22.5 }) {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  return (
    <View style={[styles.container, { width: widthPercentageToDP(width) }]}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          dispatch(cambiarSubCategorias({ categoria, title }));

          navigation.getParent("LeftDrawer").openDrawer();
        }}
      >
        {imagen ? (
          <Image
            style={{
              width: widthPercentageToDP(width),
              height: widthPercentageToDP(width),

              resizeMode: "contain",
            }}
            source={{ uri: imagen }}
          />
        ) : (
          <Image
            style={{
              width: widthPercentageToDP(width),
              height: widthPercentageToDP(width),

              resizeMode: "contain",
            }}
            source={require("../assets/categoria.png")}
          />
        )}

        <Text style={styles.textN}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(22.5),
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: heightPercentageToDP(2),
  },
  textN: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    color: colores.neutro,
    fontSize: FontSize.Esmall,
  },
});
