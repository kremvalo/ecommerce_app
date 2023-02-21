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
import { handleChange, handleSubmit } from "../Controllers";
import { validateEmail, validatePassword } from "../utils/Validate";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { toastGenerate } from "../utils/ToastGenerate";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setDataUser, setJwt } from "../redux/actions";
import useColors from "../utils/hooks/useColors";
export default function IniciarSesion({ navigation }) {
  //variables de control
  const [correo, setCorreo] = useState();

  const [password, setPassword] = useState();

  const [error, setError] = useState({});
  const { colorApp } = useColors();
  //botones
  const [buttonSubmit, setButtonSubmit] = useState(false);
  //querys para graphl

  const LOGIN_USER = `
  mutation LoginUser {
    login( input: {
      clientMutationId: "uniqueId",
      username: "${correo}",
      password: "${password}"
    } ) {
      authToken
      user {
        id
        name
        email
 
      }
    }
  }
`;
  const dispatch = useDispatch();
  return (
    <View style={[styles.container, { backgroundColor: colorApp }]}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.box}>
          <Logo src={require("../assets/logo-solo.png")} />

          <View style={{ alignItems: "center" }}>
            <InputComponent
              value={correo}
              type="blanco"
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
              type="blanco"
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
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(5) }}
              type="blanco"
              size="medium"
              label="Inicia sesión"
              rounded="large"
              onPress={async () => {
                setButtonSubmit(true);
                let response = await handleSubmit("POS", LOGIN_USER, error, {
                  correo,
                  password,
                });
                if (response) {
                  await SecureStore.setItemAsync(
                    "jwt",
                    JSON.stringify({
                      token: response?.data?.login?.authToken,
                      id_user: response?.data?.login.user?.id,
                    })
                  );

                  toastGenerate("Inicio de sesion exitoso");
                  navigation.replace("Splash");
                }
                setButtonSubmit(false);
              }}
            />
            {/* 
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(5) }}
              type="blanco"
              size="medium"
              label="Contraseña Olvidada"
              rounded="large"
              onPress={() => {
                navigation.navigate("ContrasenaOlvidada");
              }}
            /> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ContrasenaOlvidada");
              }}
            >
              <Text style={[styles.textR]}>Contraseña olvidada</Text>
            </TouchableOpacity>
          </View>

          {/*     <Image style={styles.image2} source={require("../assets/5.png")} />
        <Image style={styles.image} source={require("../assets/1.png")} />
        <Image style={styles.image3} source={require("../assets/5.png")} /> */}
          <View
            style={{
              width: widthPercentageToDP(90),
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent:
                heightPercentageToDP(100) <= 600 ? "center" : "space-between",
            }}
          >
            <View>
              <Image
                style={heightPercentageToDP(100) <= 600 ? styles.image2 : {}}
                source={require("../assets/5.png")}
              />
              <Image
                style={heightPercentageToDP(100) <= 600 ? styles.image : {}}
                source={require("../assets/1.png")}
              />
            </View>
            <Image
              style={heightPercentageToDP(100) <= 600 ? styles.image3 : {}}
              source={require("../assets/5.png")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    width: widthPercentageToDP(90),
    flex: 1,
    justifyContent: "space-between",
  },
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: "#fff",
  },
  image: {
    height: widthPercentageToDP(25),
    resizeMode: "contain",

    transform: [{ scaleX: -1 }],
  },
  image2: {
    height: widthPercentageToDP(30),
    resizeMode: "contain",
  },
  image3: {
    height: widthPercentageToDP(30),
    resizeMode: "contain",
  },
});
