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

import { colores } from "../../utils/material";

import Logo from "../../Components/Logo";
import { TextField } from "../../Components";
import { toastGenerate } from "../../utils/ToastGenerate";

const logo = "../../assets/logo_solo_rosa.png";

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
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.box}>
          <View style={styles.sectionLogo}>
            <Logo src={require(logo)} />
          </View>
          <View>
            <TextField
              name="correo"
              label="Usuario"
              value={values.correo}
              error={errors.correo}
              touched={touched.correo}
              placeholder="Escribe tu usuario"
              onChangeText={handleChange("correo")}
            />
            <TextField
              isPassword
              name="password"
              label="Contraseña"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              iconColor={colores.primary}
              secureTextEntry={showPassword}
              placeholder="Escribe tu contraseña"
              onChangeText={handleChange("password")}
              onPress={() => handleShowPassword(!showPassword)}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ContrasenaOlvidada")}
            >
              <Text style={[styles.textR]}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
              <Text style={styles.textButton}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.viewLogin}>
            <Text style={styles.textLogin}>¿No tienes cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterTypeScreen")}
            >
              <Text style={styles.textPress}>Registrate</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
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
