import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import useColors from "../utils/hooks/useColors";
import { useFavoritos } from "../utils/hooks/useFavoritos";
import { heightPercentageToDP } from "react-native-responsive-screen";
export default function Guardar({ producto }) {
  const { colorApp } = useColors();
  const { eliminar, guardar, state } = useFavoritos(producto);
  return (
    <TouchableOpacity onPress={state ? eliminar : guardar}>
      <AntDesign
        name={state ? "heart" : "hearto"}
        size={heightPercentageToDP(3)}
        color={colorApp}
      />
    </TouchableOpacity>
  );
}
