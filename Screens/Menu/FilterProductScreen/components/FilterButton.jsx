import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterButton = ({ name }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.textButton}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginRight: 7,
    borderRadius: 4,
    backgroundColor: "#FBEDED",
  },
  textButton: {
    margin: 10,
    fontSize: 12,
    color: "#FF5A5F",
  },
});

export default FilterButton;
