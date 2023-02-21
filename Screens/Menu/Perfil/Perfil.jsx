import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Logo from "../../../Components/Logo";
import { Button, TextInput } from "react-native-paper";
import ButtonComponent from "../../../Components/ButtonComponent";
import InputComponent from "../../../Components/InputComponent";
import { URL_API } from "@env";
import axios from "axios";
import {
  validateEmail,
  validateNumber,
  validatePassword,
  validateString,
  validateStringAndNumber,
} from "../../../utils/Validate";
import { handleChange, handleSubmit } from "../../../Controllers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import useColors from "../../../utils/hooks/useColors";
import Header from "../../../Components/Header";

export default function Perfil({ navigation }) {
  //variables de control
  const [email, setEmail] = useState();
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();
  const [telefono, setTelefono] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();

  const [state, setState] = useState();
  const [postcode, setPostcode] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();

  const [error, setError] = useState({});
  const { data, jwt } = useSelector((state) => state);
  const { colorApp } = useColors();
  //botones
  const [buttonSubmit, setButtonSubmit] = useState(false);
  //querys para graphl
  const INFORMACION_PERFIL = `
  mutation MyMutation {
    updateCustomer(
      input:{
        id:"${jwt.id_user}",

        shipping: {
        
          firstName: "${nombre}", 
          phone: "${telefono}", 
          city: "${city}", 
          address1: "${address1}", 
          address2: "${address2}", 
          state: "${state}", 
          postcode: "${postcode}", 
          lastName: "${lastName}", 
          company: "${company}",
          country: CO},
          billing: {
        
            firstName: "${nombre}", 
            phone: "${telefono}", 
            city: "${city}", 
            address1: "${address1}", 
            address2: "${address2}", 
            state: "${state}", 
            postcode: "${postcode}", 
            lastName: "${lastName}", 
            company: "${company}",
            country: CO}
      }
    ) {
      customer {
        billing {
          firstName
          phone
        }
      }
    }
  }
  `;

  const INFORMACION_CUENTA = `
  mutation MyMutation {
    updateUser(input: {id:"${jwt.id_user}",email: "${email}", password: "${password}"}) {
      user {
        email
      }
    }
  }`;
  const arrFun = (arr = []) => {
    for (let element of arr) {
      element.fun(element.data);
    }
  };
  useEffect(() => {
    const { email, billing } = data;
    const {
      firstName,
      phone,
      city,
      country,
      address1,
      state,
      postcode,
      lastName,
      company,
    } = billing;

    let arr = [
      { data: email, fun: setEmail },
      { data: firstName, fun: setNombre },
      { data: phone, fun: setTelefono },
      { data: city, fun: setCity },
      { data: country, fun: setCountry },
      { data: address1, fun: setAddress1 },
      { data: state, fun: setState },
      { data: postcode, fun: setPostcode },
      { data: lastName, fun: setLastName },
      { data: company, fun: setCompany },
    ];

    arrFun(arr);
  }, []);

  const theme = {
    colors: {
      primary: colorApp,
    },
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Header back />
        <View style={{ alignItems: "center" }}>
          <View style={styles.box}>
            <Text style={[styles.text, { color: colorApp }]}>Mi perfil</Text>
            <Text style={styles.text}>Informacion de cuenta</Text>
            <TextInput
              value={email}
              style={styles.input}
              label={error.email ? "Ingrese un email valido" : "Email"}
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateEmail,
                  setEmail,
                  "email",
                  setError,
                  error
                )
              }
              error={error.email}
            />
            <TextInput
              value={password}
              style={styles.input}
              label={
                error.password ? "Ingrese una contaseña valida" : "Password"
              }
              theme={theme}
              onChangeText={(e) =>
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
            />

            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(4) }}
              type="verde"
              size="large"
              label="Cambiar informacion de cuenta"
              rounded="large"
              onPress={async () => {
                setButtonSubmit(true);
                try {
                  const response = await handleSubmit(
                    "POS",
                    INFORMACION_CUENTA,
                    error,
                    {},
                    jwt.token
                  );
                  if (response) {
                    navigation.replace("Splash");
                  }
                  setButtonSubmit(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            />

            <Text style={[styles.text, { marginTop: heightPercentageToDP(2) }]}>
              Datos de envío
            </Text>
            {/* <TextInput
              value={country}
              style={styles.input}
              label={
                error.country
                  ? "No se permiten numeros ni caracteres especiales"
                  : "Pais / Region"
              }
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateString,
                  setCountry,
                  "country",
                  setError,
                  error
                )
              }
              error={error.country}
            /> */}
            <View
              style={{
                flexDirection: "row",
                width: widthPercentageToDP(80),
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={nombre}
                style={[styles.input, { width: widthPercentageToDP(35) }]}
                label={
                  error.nombre
                    ? "No se permiten numeros ni caracteres especiales"
                    : "Nombre"
                }
                theme={theme}
                onChangeText={(e) =>
                  handleChange(
                    e,
                    validateString,
                    setNombre,
                    "nombre",
                    setError,
                    error
                  )
                }
                error={error.nombre}
              />
              <TextInput
                value={lastName}
                style={[styles.input, { width: widthPercentageToDP(35) }]}
                label={
                  error.lastname
                    ? "No se permiten numeros ni caracteres especiales"
                    : "Apellido"
                }
                theme={theme}
                onChangeText={(e) =>
                  handleChange(
                    e,
                    validateString,
                    setLastName,
                    "lastname",
                    setError,
                    error
                  )
                }
                error={error.lastname}
              />
            </View>
            <TextInput
              value={company}
              style={styles.input}
              label={
                error.company ? "Solo se permiten numeros" : "Cedula / Nit"
              }
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateNumber,
                  setCompany,
                  "company",
                  setError,
                  error
                )
              }
              error={error.company}
            />
            <TextInput
              value={address1}
              style={styles.input}
              label={
                error.address1
                  ? "No se permiten caracteres especiales"
                  : "Direccion"
              }
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateStringAndNumber,
                  setAddress1,
                  "address1",
                  setError,
                  error
                )
              }
              error={error.address1}
            />
            <TextInput
              value={address2}
              style={styles.input}
              label={
                error.address1
                  ? "No se permiten caracteres especiales"
                  : "Casa/Apartamento/Torre..."
              }
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateStringAndNumber,
                  setAddress2,
                  "address2",
                  setError,
                  error
                )
              }
              error={error.address2}
            />

            <View
              style={{
                flexDirection: "row",
                width: widthPercentageToDP(80),
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={city}
                style={[styles.input, { width: widthPercentageToDP(35) }]}
                label={
                  error.city
                    ? "No se permiten numeros, ni caracteres especiales"
                    : "Ciudad"
                }
                theme={theme}
                onChangeText={(e) =>
                  handleChange(
                    e,
                    validateString,
                    setCity,
                    "city",
                    setError,
                    error
                  )
                }
                error={error.city}
              />
              <TextInput
                value={state}
                style={[styles.input, { width: widthPercentageToDP(35) }]}
                label={
                  error.state
                    ? "No se permiten numeros, ni caracteres especiales"
                    : "Departamento"
                }
                theme={theme}
                onChangeText={(e) =>
                  handleChange(
                    e,
                    validateString,
                    setState,
                    "state",
                    setError,
                    error
                  )
                }
                error={error.state}
              />
            </View>
            <TextInput
              value={postcode}
              style={styles.input}
              label={
                error.postCode
                  ? "No se permiten caracteres especiales"
                  : "Código postal (Opcional)"
              }
              theme={theme}
              onChangeText={(e) =>
                handleChange(
                  e,
                  validateNumber,
                  setPostcode,
                  "postCode",
                  setError,
                  error
                )
              }
              error={error.postCode}
            />
            <Text
              style={
                ([styles.text], { color: colores.neutro, alignSelf: "center" })
              }
            >
              Recuerda guardar cambios si editas alguna casilla.
            </Text>
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(4) }}
              type="verde"
              size="large"
              label="Guardar Datos de envió"
              rounded="large"
              onPress={async () => {
                setButtonSubmit(true);
                try {
                  const response = await handleSubmit(
                    "POS",
                    INFORMACION_PERFIL,

                    error,
                    { nombres: nombre, telefono },
                    jwt.token
                  );

                  if (response) {
                    navigation.replace("Splash");
                  }
                  setButtonSubmit(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            />

            {/*  <InputComponent
              value={nombres}
              type="rojo"
              style={{ marginTop: heightPercentageToDP(2) }}
              placeholder="Nombre completo"
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
              msgerror="Ingrese un telefono valido"
            />
           

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
            <ButtonComponent
              buttonDisabled={buttonSubmit}
              style={{ marginTop: heightPercentageToDP(4) }}
              type="rojo"
              size="large"
              label="Cambiar informacion de cuenta"
              rounded="large"
              onPress={async () => {
                setButtonSubmit(true);
                try {
                  const response = await handleSubmit(
                    "POS",
                    INFORMACION_CUENTA,
                    error,
                    {},
                    jwt.token
                  );
                  if (response) {
                    navigation.popToTop();
                  }
                  setButtonSubmit(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            /> */}
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
    backgroundColor: colores.background,
  },
  box: {
    marginTop: heightPercentageToDP(2),

    width: widthPercentageToDP(80),
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
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.large,
    color: colores.success,
  },
  input: {
    width: widthPercentageToDP(80),

    marginVertical: heightPercentageToDP(1.5),
    backgroundColor: "transparent",
    color: colores.primary,
  },
});
