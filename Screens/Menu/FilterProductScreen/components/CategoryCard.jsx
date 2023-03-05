import React from "react";
import { SvgUri } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const CategoryCard = ({ image, category }) => (
  <View style={styles.category}>
    <View style={styles.card}>
      <SvgUri width="30" height="30" uri={image} />
      <Text style={styles.textCard}>{category}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  category: {
    flex: 1,
    paddingHorizontal: wp(7),
    marginVertical: 20,
  },
  card: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 11,
    backgroundColor: "#f5f5f5",
  },
  textCard: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cardImage: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default CategoryCard;
