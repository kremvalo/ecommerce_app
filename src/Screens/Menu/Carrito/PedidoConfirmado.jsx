import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../../../Components/Logo";

import ButtonComponent from "../../../Components/ButtonComponent";

import useColors from "../../../utils/hooks/useColors";

export default function PedidoConfirmado({ navigation }) {
  const { colorApp } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colorApp }]}>
      <View style={styles.box}>
        <Logo src={require("../../../assets/logo-solo.png")} />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.textR}>¡Tu pedido ha sido confirmado!</Text>
          <Text style={styles.textN}>Te avisaremos cuando lo enviemos</Text>
          {/*   <Text style={styles.textN}>
            Hemos enviado un mail de validación a tu correo.
          </Text>
 */}
          <ButtonComponent
            style={{
              marginTop: heightPercentageToDP(8),
              borderWidth: 2,
              borderColor: colores.white,
            }}
            type="transparente"
            size="medium"
            label="Ver pedidos"
            rounded="large"
            onPress={() => {
              navigation.popToTop();
            }}
          />
          <ButtonComponent
            style={{ marginTop: heightPercentageToDP(2) }}
            type="blanco"
            size="medium"
            label="Home"
            rounded="large"
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </View>

        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colores.primary,
  },
  box: {
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    width: widthPercentageToDP(70),
    flex: 1,
    justifyContent: "flex-start",
  },
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  textN: {
    textAlign: "center",
    marginTop: heightPercentageToDP(3),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.white,
  },
  image: {
    bottom: heightPercentageToDP(2),
    right: widthPercentageToDP(0),
    position: "absolute",
  },
  image2: {
    bottom: heightPercentageToDP(0),
    left: widthPercentageToDP(0),
    position: "absolute",
  },
});
