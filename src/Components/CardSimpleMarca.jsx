import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function CardSimpleMarca({ marca }) {
  const navigation = useNavigation();
  const { name, camposTaxonomia } = marca;
  const { image = { link: "", sourceUrl: "" } } = camposTaxonomia;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Productos", { marca: name })}
    >
      <Image
        style={{
          width: widthPercentageToDP(25),
          height: heightPercentageToDP(10),
        }}
        source={{ uri: image?.sourceUrl }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: heightPercentageToDP(1),
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(10),
    marginHorizontal: widthPercentageToDP(2.5),
  },
});
