import React from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colores } from "../utils/material";

const product = "../assets/producto.png";

const CardProductItem = ({ onPress, section = "Maquillaje" }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
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
      <Image style={styles.imageProduct} source={require(product)} />
    </View>
    <View>
      <Text style={styles.textProduct}>Esmalte * Masglo</Text>
      <Text style={styles.descProduct}>Lorem Ipsum</Text>
      <Text style={styles.costProduct}>$8.000.0</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: "#fff",
    padding: 16,
    marginLeft: 5,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 6,
    shadowColor: "#000",
    marginRight: 20,
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
  costProduct: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3C3D3E",
  },
});

export default CardProductItem;
