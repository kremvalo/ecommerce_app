import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores } from "../utils/material";
import { useDispatch } from "react-redux";
import { borrarItemCarrito, setCantidadCarrito } from "../redux/actions";
import { FontAwesome } from "@expo/vector-icons";
export default function Contador({ width, contador, setContador, id }) {
  const style = {
    container: {
      width: width ? width : widthPercentageToDP(20),
    },
  };
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {contador > 1 ? (
        <TouchableOpacity
          onPress={() => {
            setContador(contador - 1);
            if (id) {
              dispatch(setCantidadCarrito({ id, cantidad: contador - 1 }));
            }
          }}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      ) : id ? (
        <TouchableOpacity onPress={() => dispatch(borrarItemCarrito(id))}>
          <FontAwesome
            name="trash-o"
            size={heightPercentageToDP(2)}
            color={colores.success}
          />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}

      <Text style={styles.text}>{contador}</Text>
      <TouchableOpacity
        onPress={() => {
          setContador(contador + 1);
          if (id) {
            dispatch(setCantidadCarrito({ id, cantidad: contador + 1 }));
          }
        }}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(30),
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    height: heightPercentageToDP(5),
    borderColor: colores.success,
  },
  text: {
    fontFamily: "Poppins_700Bold",
    color: colores.success,
  },
});
