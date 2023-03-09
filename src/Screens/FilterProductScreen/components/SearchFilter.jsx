import React, { useState } from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { colores } from "../../../utils/material";

const SearchFilter = ({ onPress }) => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.text}
          onChangeText={onChangeText}
        />
        <View style={styles.searchIcon}>
          <EvilIcons name="search" size={24} color={colores.primary} />
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.filterIcon}>
        <AntDesign name="filter" size={20} color={colores.primary} />
      </TouchableOpacity>
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
    height: 36,
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "90%",
    borderColor: "#FFADB0",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  searchIcon: {
    width: 32,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFADB0",
    borderTopEndRadius: 15,
  },
  filterIcon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBEDED",
    borderTopEndRadius: 15,
  },
});

export default SearchFilter;
