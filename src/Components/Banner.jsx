import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Banner({ source }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageBanner} source={{ uri: source.mediaItemUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  imageBanner: {
    width: 230,
    height: 108,
    resizeMode: "cover",
    borderRadius: 8,
  },
});
