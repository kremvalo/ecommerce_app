import React from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colores } from "../utils/material";
import { replaceText, trimEllip } from "../utils/Utils";

const CardProductItem = ({ isEnd, item, onPress, section = "Maquillaje" }) => {
  const {
    name,
    price,
    salePrice,
    shortDescription,
    image: { sourceUrl },
  } = item;
  const description = replaceText(shortDescription, "<p>", "", "</p>");

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { marginRight: isEnd ? 60 : 0, marginLeft: 5 }]}
    >
      <View style={styles.topSection}>
        <View style={styles.category}>
          <View style={styles.icon}>
            <Octicons name="paintbrush" size={12} color={colores.primary} />
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{section}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonIcon}>
          <AntDesign name="hearto" size={15} color={colores.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image style={styles.imageProduct} source={{ uri: sourceUrl }} />
      </View>
      <View>
        <Text style={styles.textProduct}>{trimEllip(name, 25)}</Text>
        <Text style={styles.descProduct}>{trimEllip(description, 25)}</Text>

        <View style={styles.price}>
          <Text
            style={[
              styles.unitProduct,
              {
                color: salePrice ? colores.black : colores.lightBlue,
                textDecorationLine: salePrice ? "line-through" : "none",
              },
            ]}
          >
            {replaceText(price, "&nbsp;", "")}
          </Text>
          {salePrice && (
            <Text style={styles.saleProduct}>
              {replaceText(salePrice, "&nbsp;", "")}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colores.white,
    padding: 16,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 6,
    shadowColor: colores.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    zIndex: 1,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#FBEDED",
  },
  tag: {
    backgroundColor: "#f5f5f5",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: -15,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B8BCB7",
  },
  buttonIcon: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBEDED",
    borderTopEndRadius: 15,
  },
  mainSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginBottom: 8,
    alignItems: "center",
  },
  price: {
    flexDirection: "row",
  },
  imageProduct: {
    width: 72,
    height: 90,
    marginRight: 8,
  },
  textProduct: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  descProduct: {
    fontSize: 12,
    marginBottom: 4,
    color: "#3C3D3E",
  },
  unitProduct: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    textDecorationStyle: "solid",
  },
  saleProduct: {
    color: colores.lightBlue,
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default CardProductItem;
