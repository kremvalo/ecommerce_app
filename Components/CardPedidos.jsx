import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";

export default function CardPedidos({ pedido }) {
  const {
    date,
    orderNumber,
    paymentMethod,
    status,
    subtotal,
    total,
    shippingTotal,
    shipping,
  } = pedido;
  console.log(pedido);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden #{orderNumber}</Text>
      <Text style={styles.text}>Fecha: {date}</Text>
      <Text style={styles.text}>
        Datos de envio: {shipping?.address1} {shipping?.address2}
      </Text>
      <Text style={styles.text}>Estado: {status}</Text>
      <Text style={styles.text}>Total: {total?.split(";")[1]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(20),
    /*  borderBottomWidth: 1, */
    borderBottomColor: colores.success,
    marginVertical: heightPercentageToDP(1),
  },
  text: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.small,
    color: colores.neutro,
  },
  title: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.medium,
    color: colores.success,
  },
});
