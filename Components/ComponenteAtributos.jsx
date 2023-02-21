import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import { useEffect } from "react";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function ComponenteAtributos({ nombre, callback, select }) {
  const [state, setState] = useState(false);
  useFocusEffect(
    useCallback(() => {
      return () => {
        setState(false);
      };
    }, [])
  );
  return (
    <TouchableOpacity
      style={select ? styles.select : styles.container}
      onPress={() => {
        callback({
          filtro: {
            terms: nombre,
            operator: "AND",
            taxonomy: "PATIPOSDEPIEL",
          },
          url_filtro: `{terms:"${nombre}",operator:IN,taxonomy:PATIPOSDEPIEL}`,
          select,
        });
      }}
    >
      <Text style={select ? styles.textTSelect : styles.textT}>{nombre}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colores.ter,
    height: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(4),
    marginHorizontal: widthPercentageToDP(2),
    alignItems: "center",

    justifyContent: "center",
  },
  select: {
    borderRadius: 12,
    backgroundColor: colores.white,
    height: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(4),
    marginHorizontal: widthPercentageToDP(2),
    alignItems: "center",
    borderColor: colores.ter,
    borderWidth: 2,
    justifyContent: "center",
  },
  textTSelect: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.medium,
    color: colores.ter,
  },
  textT: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.medium,
    color: colores.white,
  },
});
