import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const avatar =
  "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png";

const CategoryCard = ({ category = "Protección solar" }) => (
  <View style={styles.category}>
    <View style={styles.card}>
      <Image
        source={{ uri: avatar }}
        style={{
          width: 14,
          height: 14,
          resizeMode: "contain",
          marginRight: 10,
        }}
      />
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
});

export default CategoryCard;
