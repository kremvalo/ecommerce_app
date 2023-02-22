import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default function Banner({ source }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageBanner} source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  imageBanner: {
    width: 240,
    height: 108,
    resizeMode: "contain",
  },
});
