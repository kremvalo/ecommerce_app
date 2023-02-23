import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CardProduct = ({ section = "Maquillaje" }) => (
  <View style={styles.container}>
    <View style={styles.topSection}>
      <View style={styles.category}>
        <View style={styles.icon}></View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{section}</Text>
        </View>
      </View>
      <View style={styles.buttonIcon}>
        <Image />
      </View>
    </View>
    <View style={styles.mainSection}>
      <Image style={styles.imageProduct} />
      <View style={styles.section}>
        <Text style={styles.textProduct}>Esmalte * Masglo</Text>
        <Text style={styles.descProduct}>Lorem Ipsum</Text>
        <Text style={styles.costProduct}>$8.000.0 $5.000.0</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 284,
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
    height: 24,
    borderRadius: 24,
    backgroundColor: "#FBEDED",
    alignItems: "center",
    zIndex: 1,
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
    backgroundColor: "#FBEDED",
    borderTopEndRadius: 90,
  },
  mainSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageProduct: {
    width: 72,
    height: 90,
    marginRight: 8,
  },
  section: {},
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

export default CardProduct;
