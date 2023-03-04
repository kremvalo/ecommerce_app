import React, { forwardRef } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";

import { colores as colors } from "../utils/material";

const flag =
  "https://png.pngtree.com/png-clipart/20230221/ourmid/pngtree-colombia-flag-pin-badge-png-image_6610304.png";

const PhoneField = forwardRef(
  (
    {
      mb = 10,
      name,
      error,
      label = "Télefono",
      value,
      touched,
      countryCode = "+57",
      placeholder,
      onChangeText,
      onSubmitEditing,
    },
    ref
  ) => {
    const validationColor = !touched
      ? colors.ligthGray
      : error
      ? colors.error
      : colors.ligthGray;

    return (
      <View style={{ marginBottom: mb }}>
        <Text style={styles.label}>{label}</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              borderWidth: 1,
              flexDirection: "row",
              borderEndWidth: 0,
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderColor: validationColor,
            }}
          >
            <Image style={{ width: 20, height: 20 }} source={{ uri: flag }} />
            <Text>{countryCode}</Text>
          </View>
          <TextInput
            ref={ref}
            name={name}
            value={value}
            error={error}
            touched={touched}
            placeholder={placeholder}
            keyboardType="number-pad"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            placeholderTextColor={colors.textColor}
            style={[styles.input, { borderColor: validationColor }]}
          />
        </View>
        {touched && error && <Text style={styles.textError}>{error}</Text>}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  label: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    width: "80%",
    fontSize: 12,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  textError: {
    color: colors.error,
    marginTop: 7,
  },
});

export default PhoneField;
