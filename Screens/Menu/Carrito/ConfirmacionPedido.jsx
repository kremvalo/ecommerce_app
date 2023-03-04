import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Header from "../../../Components/Header";
import ButtonComponent from "../../../Components/ButtonComponent";
import { useSelector } from "react-redux";
import CardCarrito from "../../../Components/CardCarrito";
import { useEffect } from "react";

export default function ConfirmacionPedido({ navigation }) {
  const { viewer, data, carrito } = useSelector((state) => state);
  const [suma, setSuma] = useState(0);

  const actualizarSubTotal = () => {
    let aux = 0;

    carrito?.forEach((i) => {
      console.log(i);
      aux = aux + parseInt(i.cantidad) * parseInt(i.node.price);
    });
    console.log(aux, "carrito");
    setSuma(aux);
  };

  useEffect(() => {
    actualizarSubTotal();
  }, [carrito]);

  return (
    <View style={styles.container}>
      <Header back />
      <View style={styles.box}>
        <ScrollView
          style={{
            maxHeight: heightPercentageToDP(60),
            maxWidth: widthPercentageToDP(90),
          }}
        >
          {carrito?.map((item, i) => {
            return <CardCarrito producto={item} key={i} />;
          })}
          <View
            style={{
              width: widthPercentageToDP(90),
              backgroundColor: "#FBEDED",
              height: heightPercentageToDP(0.1),
              alignSelf: "center",
            }}
          />
          <Text style={styles.text}>Datos De Envío</Text>
          <View style={styles.boxText}>
            <View style={{ width: widthPercentageToDP(50) }}>
              <Text style={styles.textData}>{data.billing.firstName}</Text>
            </View>

            <Text style={styles.cambiar}>Cambiar</Text>
          </View>
          <View style={styles.boxText}>
            <View style={{ width: widthPercentageToDP(50) }}>
              <Text style={styles.textData}>
                Calle 45a #27-85 Torre 3 apto 1112/Cali
              </Text>
            </View>

            <Text style={styles.cambiar}>Cambiar</Text>
          </View>
          <View style={styles.boxText}>
            <View style={{ width: widthPercentageToDP(50) }}>
              <Text style={styles.textData}>Método de pago: PSE</Text>
            </View>

            <Text style={styles.cambiar}>Cambiar</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.subTotal}>Total</Text>
          <Text style={styles.price}>${suma}</Text>
          <Text style={styles.subTotal}>Productos</Text>
          <Text style={styles.subTotal}>${suma}</Text>
          <Text style={styles.subTotal}>Envio</Text>
          <Text style={styles.subTotal}>$10000 </Text>
        </View>
        <ButtonComponent
          type="verde"
          size="medium"
          widthSize={widthPercentageToDP(40)}
          label="Ir a pagar"
          rounded="large"
          onPress={() => {
            navigation.navigate("PedidoConfirmado");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colores.background,
  },
  box: {
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    width: widthPercentageToDP(90),
    flex: 1,
    justifyContent: "flex-start",
  },
  bottom: {
    justifyContent: "space-around",
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30),
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    padding: heightPercentageToDP(2),
    alignItems: "flex-start",
  },
  subTotal: {
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  price: {
    fontFamily: "Poppins_700Bold",
    color: colores.neutro,
    fontSize: FontSize.Elarge,
  },
  text: {
    marginTop: heightPercentageToDP(2),

    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.Elarge,
  },
  boxText: {
    marginVertical: heightPercentageToDP(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textData: {
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  cambiar: {
    fontFamily: "Poppins_400Regular",
    color: colores.primary,
    fontSize: FontSize.medium,
  },
});
