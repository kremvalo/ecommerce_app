import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import { colores as colors } from "../../../utils/material";

const client = "../../../assets/client.png";
const company = "../../../assets/company.png";
const logoVherona = "../../../assets/LogoRojo.png";
const logoVheronaPurple = "../../../assets/modalnegocio.png";

const CardRegister = ({ isCompany, onPress }) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={isCompany ? require(client) : require(company)}
    />
    <View style={styles.mainSection}>
      <Image
        style={[styles.logo, {}]}
        source={isCompany ? require(logoVherona) : require(logoVheronaPurple)}
      />
      <Text style={styles.fisrtText}>
        Somos tu aliado y el de tu negocio e productos de belleza y salud
      </Text>
      <Text style={styles.secondText}>
        únete a este bello universo donde la tecnología, la calidad y las marcas
        potencian tu negocio
      </Text>
      <View style={styles.separator} />
      <TouchableOpacity
        style={[
          styles.backButton,
          {
            backgroundColor: isCompany ? "#CFECF2" : "#D1CAE2",
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.textButton,
            { color: isCompany ? "#5ABED2" : "#624F92" },
          ]}
        >
          Registrate
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: "4%",
    elevation: 8,
    shadowColor: "#000",
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.3,
  },
  image: {
    width: "23%",
    borderRadius: 10,
  },
  mainSection: {
    width: "77%",
    paddingLeft: "5%",
  },
  logo: {
    width: wp(18),
    height: wp(13),
    resizeMode: "contain",
  },
  fisrtText: {
    marginBottom: 20,
  },
  secondText: {
    marginBottom: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    marginBottom: 20,
    backgroundColor: colors.ligthGray,
  },
  backButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderTopEndRadius: 15,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CardRegister;
