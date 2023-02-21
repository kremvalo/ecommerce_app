import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default function Banner({ source }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: widthPercentageToDP(50),
          height: heightPercentageToDP(10),
          resizeMode: "contain",
        }}
        source={source}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentageToDP(2),
  },
});
