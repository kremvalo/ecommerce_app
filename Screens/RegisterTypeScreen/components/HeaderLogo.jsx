import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const logoVherona = "../../../assets/logo_solo_rosa.png";

const HeaderLogo = ({ onPress }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <AntDesign name="arrowleft" size={17} color="black" />
    </TouchableOpacity>
    <Image style={styles.logo} source={require(logoVherona)} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(6),
  },
  backButton: {
    width: wp(10),
    height: wp(10),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBEDED",
  },
  logo: {
    width: wp(30),
    height: wp(30),
    resizeMode: "contain",
  },
});

export default HeaderLogo;
