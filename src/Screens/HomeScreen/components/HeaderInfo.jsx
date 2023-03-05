import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const avatar =
  "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png";

const HeaderInfo = () => (
  <View style={styles.container}>
    <Image source={{ uri: avatar }} style={styles.imageAvatar} />
    <View style={styles.sectionText}>
      <Text style={styles.textName}>Hola</Text>
      <Text style={styles.textUser}>Darwin Saenz</Text>
    </View>
  </View>
);

export default HeaderInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
  },
  imageAvatar: {
    width: widthPercentageToDP(10),
    height: widthPercentageToDP(10),
    resizeMode: "stretch",
    borderRadius: 32,
  },
  sectionText: {
    marginLeft: 15,
  },
  textName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  textUser: {
    fontSize: 12,
    color: "#3C3D3E",
  },
});
