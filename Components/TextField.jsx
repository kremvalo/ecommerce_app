import React, { forwardRef } from "react";
import { Octicons } from "@expo/vector-icons";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
      onPress,
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
        <View
          style={{
            alignItems: isPassword && "center",
            flexDirection: isPassword && "row",
          }}
        >
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
            style={[
              styles.input,
              {
                width: !isPassword ? "100%" : "88%",
                borderColor: validationColor,
              },
            ]}
          />
          {isPassword && (
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.pressIcon,
                {
                  width: !isPassword ? "0%" : "10%",
                },
              ]}
            >
              {!secureTextEntry ? (
                <Octicons name="eye" size={24} color="##231F20" />
              ) : (
                <Octicons name="eye-closed" size={24} color="##231F20" />
              )}
            </TouchableOpacity>
          )}
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
  pressIcon: {
    marginLeft: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textError: {
    color: colors.error,
    marginTop: 7,
  },
});

export default TextField;
