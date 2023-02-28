import React, { forwardRef } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import { colores as colors } from "../utils/material";

const TextField = forwardRef(
  (
    {
      mb = 10,
      name,
      error,
      label,
      value,
      touched,
      isPassword,
      placeholder,
      keyboardType,
      onChangeText,
      autoCapitalize,
      onSubmitEditing,
      secureTextEntry,
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
        <View>
          <TextInput
            ref={ref}
            name={name}
            value={value}
            error={error}
            touched={touched}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            placeholderTextColor={colors.textColor}
            style={[styles.input, { borderColor: validationColor }]}
          />
          {isPassword && <Text>Icon</Text>}
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
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  textError: {
    color: colors.error,
    marginTop: 7,
  },
});

export default TextField;
