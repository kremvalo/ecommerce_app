import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../../Components/Header";
import { colores, FontSize } from "../../../utils/material";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import CardCarrito from "../../../Components/CardCarrito";
import CardPedidos from "../../../Components/CardPedidos";
import { useEffect } from "react";
import { handleSubmit } from "../../../Controllers";
import useColors from "../../../utils/hooks/useColors";

export default function TodosLosPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const { colorApp } = useColors();
  const queryPedidos = `query MyQuery2 {
    orders(where: {orderby: {field: DATE, order: ASC}}) {
      nodes {
        subtotal(format: FORMATTED)
        total(format: FORMATTED)
        paymentMethod
        date
        id
        needsPayment
        needsProcessing
        needsShippingAddress
        orderNumber
        status
        cartHash
        shippingAddressMapUrl
        shippingTotal(format: FORMATTED)
        shipping {
          address1
          address2
          city
          company
        }
      }
    }
  }`;

  useEffect(() => {
    consultarData();
  }, []);
  const consultarData = async () => {
    try {
      console.log("ejecutando");
      let pedidos = await handleSubmit("GET", queryPedidos, {}, {}, jwt.token);
      console.log(pedidos.data.orders.nodes);
      let aux = pedidos.data.orders.nodes.filter(
        (element) => element.orderNumber !== null
      );
      setPedidos(aux);
    } catch (error) {
      console.log(error);
    }
  };

  const { carrito, jwt } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Header back />
          <Text style={[styles.text, { color: colorApp }]}>Pedidos</Text>
          {pedidos?.map((item, i) => {
            return <CardPedidos key={i} pedido={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.background,
    alignItems: "center",
    flex: 1,
  },
  box: {
    width: widthPercentageToDP(90),
    alignItems: "center",
  },
  text: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.large,
    color: colores.success,
  },
});
