import React, { useState } from "react";
import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { styles } from "./styles";
import { initialValues, LoginSchema } from ".";

import Logo from "../../Components/Logo";
import { TextField } from "../../Components";
import { toastGenerate } from "../../utils/ToastGenerate";
import ButtonComponent from "../../Components/ButtonComponent";

const logo = "../../assets/LogoRojo.png";

export default function LoginScreen({ navigation }) {
  //variables de control
  const [buttonSubmit, setButtonSubmit] = useState(false);
  const [showPassword, handleShowPassword] = useState(true);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit: onSubmitForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => submitForm(values),
  });

  const onSubmit = async () => {
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
  };

  //querys para graphl
  const LOGIN_USER = `
  mutation LoginUser {
    login( input: {
      clientMutationId: "uniqueId",
      username: "${values.correo}",
      password: "${values.password}"
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

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.box}>
          <Logo src={require(logo)} />
          <View>
            <TextField
              name="correo"
              label="Usuario"
              placeholder="Escribe tu usuario"
              value={values.correo}
              error={errors.correo}
              touched={touched.correo}
              onChangeText={handleChange("correo")}
            />
            <TextField
              isPassword
              name="password"
              label="Contraseña"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              secureTextEntry={showPassword}
              placeholder="Escribe tu contraseña"
              onChangeText={handleChange("password")}
              onPress={() => handleShowPassword(!showPassword)}
            />
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(5) }}
              type="blanco"
              size="medium"
              label="Inicia sesión"
              rounded="large"
              onPress={onSubmit}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ContrasenaOlvidada")}
            >
              <Text style={[styles.textR]}>Contraseña olvidada</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              width: widthPercentageToDP(90),
              justifyContent:
                heightPercentageToDP(100) <= 600 ? "center" : "space-between",
            }}
          >
            <Image
              style={
                heightPercentageToDP(100) <= 600 ? { ...styles.image2 } : {}
              }
              source={require("../../assets/2-rojo.png")}
            />
            <Image
              style={
                heightPercentageToDP(100) <= 600 ? { ...styles.image } : {}
              }
              source={require("../../assets/1-rojo.png")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
