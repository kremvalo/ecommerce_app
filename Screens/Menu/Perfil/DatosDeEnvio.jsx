import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import useColors from "../../../utils/hooks/useColors";
import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonComponent from "../../../Components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
export default function DatosDeEnvio() {
  const navigation = useNavigation();
  const { colorApp } = useColors();
  const theme = {
    colors: {
      primary: colorApp,
    },
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign
                style={{ width: widthPercentageToDP(6) }}
                name="left"
                size={heightPercentageToDP(2)}
                color={colores.text}
              />
            </TouchableOpacity>

            <Image
              style={{
                width: heightPercentageToDP(5),
                height: heightPercentageToDP(5),
                resizeMode: "cover",
                backgroundColor: "#fff",
              }}
              source={
                colorApp === "#9787BF"
                  ? require("../../../assets/icono-morado.png")
                  : require("../../../assets/icono-rojo.png")
              }
            />
          </View>

          <Text style={styles.text}>Datos De Envío</Text>
          <TextInput style={styles.input} label="Cedula" theme={theme} />
          <TextInput style={styles.input} label="Direccion" theme={theme} />
          <TextInput style={styles.input} label="Detalles" theme={theme} />
          <TextInput style={styles.input} label="Ciudad" theme={theme} />
          <ButtonComponent
            style={{ alignSelf: "center" }}
            type="verde"
            size="medium"
            widthSize={widthPercentageToDP(40)}
            label="Ir a pagar"
            rounded="large"
          />
        </View>
      </KeyboardAwareScrollView>
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

    width: widthPercentageToDP(80),
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.Elarge,
  },
  input: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    marginVertical: heightPercentageToDP(5),
    backgroundColor: "transparent",
    color: colores.primary,
  },
});
