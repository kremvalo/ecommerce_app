import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet, Platform } from "react-native";

import { colores as colors } from "../utils/material";

const SelectField = ({
  mb = 10,
  error,
  items,
  label = "Seleccione",
  touched,
  placeholder = "Seleccione",
}) => {
  const validationColor = !touched
    ? colors.ligthGray
    : error
    ? colors.error
    : colors.ligthGray;
  return (
    <View style={{ marginBottom: mb }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.input, { borderColor: validationColor }]}>
        <RNPickerSelect
          items={items}
          placeholder={{ label: `${placeholder}` }}
          onValueChange={(value) => console.log(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Platform.OS === "ios" ? 13 : 0,
    paddingHorizontal: Platform.OS === "ios" ? 15 : 0,
  },
  textError: {
    color: colors.error,
    marginTop: 7,
  },
});

export default SelectField;
