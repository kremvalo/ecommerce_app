import React from "react";
import { SvgUri } from "react-native-svg";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colores, FontSize } from "../utils/material";
import { cambiarSubCategorias } from "../redux/actions";

export default function Categoria({ categoria, title, image, width = 22.5 }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressCategory = () => {
    dispatch(cambiarSubCategorias({ categoria, title }));
    navigation.getParent("LeftDrawer").openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressCategory} style={styles.touchView}>
        {image ? (
          <SvgUri width="30" height="30" uri={image} />
        ) : (
          <Image
            style={{
              resizeMode: "contain",
              width: widthPercentageToDP(width),
              height: widthPercentageToDP(width),
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
    height: 78,
    width: widthPercentageToDP(22.5),
    backgroundColor: "red",
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 30,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: "2%",
  },
  touchView: {
    alignItems: "center",
    paddingTop: 5,
  },
  textN: {
    fontFamily: "Poppins_600SemiBold",
    color: colores.neutro,
    fontSize: FontSize.Esmall,
    textAlign: "center",
  },
});
