import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colores, FontSize } from "../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../Components/Logo";
import { Button } from "react-native-paper";
import ButtonComponent from "../Components/ButtonComponent";
import InputComponent from "../Components/InputComponent";
import { URL_API } from "@env";
import axios from "axios";
import {
  validateEmail,
  validateNumber,
  validatePassword,
  validateString,
} from "../utils/Validate";
import { handleChange, handleSubmit } from "../Controllers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Registro({ navigation, route }) {
  const { filter } = route.params;

  //variables de control
  const [correo, setCorreo] = useState();
  const [nombres, setNombres] = useState();
  const [nit, setNit] = useState();
  const [password, setPassword] = useState();
  const [telefono, setTelefono] = useState();
  const [error, setError] = useState({});

  //botones
  const [buttonSubmit, setButtonSubmit] = useState(false);
  //querys para graphl
  const REGISTER_USER = `
  mutation registerCustomerUser {
    registerCustomer(
      input: {
        username: "${correo}", 
        email: "${correo}", 
        shipping: {phone: "${telefono}",   firstName:"${nombres}",},
        billing: {phone: "${telefono}",   firstName:"${nombres}",}, 
        password: "${password}"}
      
    ) {
      customer {
        email
      }
    }
  }
  `;

  const REGISTER_BUSINESS = `
  mutation registerBusiness {
    registerBusiness(
      input: {
        username: "${correo}", 
        email: "${correo}", 
        shipping: {phone: "${telefono}",   firstName:"${nombres}", company:"${nit}"},
        billing: {phone: "${telefono}",   firstName:"${nombres}",company:"${nit}"}, 
        password: "${password}"}
      
    ) {
      customer {
        email
      }
    }
  }
  `;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Logo src={require("../assets/LogoRojo.png")} />
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <View
            style={{ alignItems: "center", marginTop: heightPercentageToDP(2) }}
          >
            <InputComponent
              value={nombres}
              type="rojo"
              style={{ marginTop: heightPercentageToDP(2) }}
              placeholder={
                filter === "cliente"
                  ? "Nombre completo"
                  : "Razón social de tu empresa"
              }
              size="large"
              funcion={(e) =>
                handleChange(
                  e,
                  validateString,
                  setNombres,
                  "nombres",
                  setError,
                  error
                )
              }
              error={error.nombres}
              msgerror="Ingrese un nombre valido"
            />
            {filter === "negocio" && (
              <InputComponent
                value={nit}
                type="rojo"
                style={{ marginTop: heightPercentageToDP(2) }}
                placeholder="Nit"
                size="large"
                funcion={(e) =>
                  handleChange(
                    e,
                    validateNumber,
                    setNit,
                    "nit",
                    setError,
                    error
                  )
                }
                error={error.nit}
                msgerror="Ingrese solo numeros"
              />
            )}
            <InputComponent
              value={correo}
              type="rojo"
              style={{ marginTop: heightPercentageToDP(2) }}
              placeholder="Email"
              size="large"
              funcion={(e) =>
                handleChange(
                  e,
                  validateEmail,
                  setCorreo,
                  "correo",
                  setError,
                  error
                )
              }
              error={error.correo}
              msgerror="Ingrese un correo valido"
            />
            <InputComponent
              value={password}
              password={true}
              type="rojo"
              style={{ marginTop: heightPercentageToDP(2) }}
              placeholder="Contraseña"
              size="large"
              funcion={(e) =>
                handleChange(
                  e,
                  validatePassword,
                  setPassword,
                  "password",
                  setError,
                  error
                )
              }
              error={error.password}
              msgerror="Ingrese una contraseña valida alfanumerica"
            />

            <InputComponent
              type="rojo"
              style={{ marginTop: heightPercentageToDP(2) }}
              placeholder="Telefono"
              size="large"
              value={telefono}
              funcion={(e) =>
                handleChange(
                  e,
                  validateNumber,
                  setTelefono,
                  "telefono",
                  setError,
                  error
                )
              }
              error={error.telefono}
              msgerror="Ingrese una contraseña valida alfanumerica"
            />
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(2) }}
              type="rojo"
              size="medium"
              label="Continuar"
              rounded="large"
              onPress={async () => {
                setButtonSubmit(true);
                try {
                  const response = await handleSubmit(
                    "POS",
                    filter === "cliente" ? REGISTER_USER : REGISTER_BUSINESS,

                    error,
                    filter === "cliente"
                      ? { nombres, correo, password }
                      : { nombres, correo, password, nit, telefono }
                  );
                  if (response) {
                    navigation.replace("ConfirmacionRegistro");
                  }
                  setButtonSubmit(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.textR}>Atras</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <View></View>
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
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.primary,
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
