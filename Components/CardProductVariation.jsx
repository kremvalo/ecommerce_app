import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import { useNavigation } from "@react-navigation/native";

export default function CardProductVariation({ producto, marca }) {
  const { image, name, price, stockStatus, type, databaseId, id } =
    producto.node;
  const navigation = useNavigation();
  const { name: nombreMarca } = marca.nodes[0];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductoDetalle", {
          producto: {
            node: {
              image,
              name,
              price,
              stockStatus,
              databaseId,
              type,
              allPaMarca: marca,
            },
          },
        })
      }
    >
      <Image style={styles.image} source={{ uri: image?.sourceUrl }} />
      <Text style={styles.textT}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP(1),
    width: widthPercentageToDP(30),
    height: widthPercentageToDP(30),
    alignItems: "center",
  },
  image: {
    width: widthPercentageToDP(20),
    height: widthPercentageToDP(20),
    resizeMode: "contain",
  },
  textT: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.Esmall,
  },
});
