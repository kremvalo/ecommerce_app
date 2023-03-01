import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import { colores as colors } from "../../../utils/material";

const logoVherona = "../../../assets/LogoRojo.png";

const CardRegister = ({ onPress }) => (
  <View style={styles.card}>
    <View style={styles.image} />
    <View style={styles.mainSection}>
      <Image style={styles.logo} source={require(logoVherona)} />
      <Text style={styles.fisrtText}>
        Somos tu aliado y el de tu negocio e productos de belleza y salud
      </Text>
      <Text style={styles.secondText}>
        únete a este bello universo donde la tecnología, la calidad y las marcas
        potencian tu negocio
      </Text>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <Text>Registrate</Text>
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
    width: "20%",
    borderRadius: 10,
    backgroundColor: "#000",
  },
  mainSection: {
    width: "80%",
    paddingLeft: "5%",
  },
  logo: {
    width: wp(25),
    height: wp(20),
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
    backgroundColor: "#FBEDED",
    borderTopEndRadius: 15,
  },
});

export default CardRegister;
