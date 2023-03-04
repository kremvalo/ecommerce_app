import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SearchFilter = () => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.text}
          onChangeText={onChangeText}
        />
        <View style={styles.searchIcon} />
      </View>
      <View style={styles.filterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: wp(7),
    justifyContent: "space-between",
    marginBottom: 20,
  },
  container: {
    width: "85%",
    flexDirection: "row",
  },
  text: {
    height: 32,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderColor: "#FFADB0",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  searchIcon: {
    width: 32,
    height: 32,
    borderTopEndRadius: 15,
    backgroundColor: "#FFADB0",
  },
  filterIcon: {
    width: 32,
    height: 32,
    borderTopEndRadius: 15,
    backgroundColor: "#FBEDED",
  },
});

export default SearchFilter;
