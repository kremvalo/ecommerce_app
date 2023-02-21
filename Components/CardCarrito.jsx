import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import Contador from "./Contador";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../redux/actions";
import { currencyFormat } from "../utils/Utils";

export default function CardCarrito({ producto, view }) {
  const [contador, setContador] = useState(producto.cantidad);

  const {
    image,
    allPaMarca,
    name,
    regularPrice: price,
    id,
    preciosNegocio,
  } = producto.node;
  const dispatch = useDispatch();
  const { viewer, data, carrito, jwt } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: widthPercentageToDP(40),
          height: widthPercentageToDP(40),
          resizeMode: "contain",
        }}
        source={{ uri: image.sourceUrl }}
      />
      <View>
        <Text style={styles.textT}>
          {name.length > 16 ? name.slice(0, 16) + "..." : name}
        </Text>
        <Text style={styles.textN}>
          {allPaMarca.nodes.length > 0 && allPaMarca.nodes[0].name}
        </Text>
        <Text style={styles.textN}>
          {data.role === "business"
            ? viewer.autorizaciondenegocio.validarNegocio !== null
              ? currencyFormat(preciosNegocio?.precioRegularNegocio * contador)
              : currencyFormat(price * contador)
            : currencyFormat(price * contador)}
        </Text>
        {view ? (
          <Text style={styles.textN}>{contador} und.</Text>
        ) : (
          <Contador contador={contador} setContador={setContador} id={id} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(20),
    alignItems: "flex-start",
  },
  textT: {
    marginTop: heightPercentageToDP(-0.5),
    width: widthPercentageToDP(40),
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  textN: {
    marginTop: heightPercentageToDP(-0.5),
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.small,
  },
});
