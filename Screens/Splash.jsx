import { Image, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { colores } from "../utils/material";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import Logo from "../Components/Logo";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { handleSubmit } from "../Controllers";
import {
  cleanCarrito,
  setCarrito,
  setDataUser,
  setJwt,
  setViewer,
} from "../redux/actions";
import { gql } from "@apollo/client";
import { toastGenerate } from "../utils/ToastGenerate";
import dataResponse from "../utils/dataResponse";
import useColors from "../utils/hooks/useColors";

export default function Splash({ navigation }) {
  const dispatch = useDispatch();
  const { colorApp } = useColors();
  const obtenerData = (id) => {
    return `
    query MyQuery {
      customer(id: "${id}") {
        email
        role
        billing {
          firstName
          phone
          city
          country
          address1
          state
          postcode
          lastName
          company
          address2
        }
       
      }
      viewer {
        autorizaciondenegocio {
          validarNegocio
        }
      }
    }
  `;
  };

  const verificarData = async () => {
    let jwt = await SecureStore.getItemAsync("jwt");
    let carrito = await handleSubmit(
      "GET",
      `query MyQuery {
      cart {
        contents {
          itemCount
          productCount
        }
        contentsTotal
      }
      }`,
      {},
      {}
    );
    if (jwt) {
      console.log(jwt);
      jwt = JSON.parse(jwt);

      let response = await handleSubmit(
        "GET",
        obtenerData(jwt.id_user),
        {},
        {},
        jwt.token
      );

      console.log(carrito);
      if (!response) {
        await SecureStore.deleteItemAsync("jwt");
        dispatch(cleanCarrito());
        toastGenerate("Sesión expirada, vuelva a iniciar sesión");
      } else {
        console.log(response);
        dispatch(setJwt(jwt));
        dispatch(setViewer(response.data.viewer));
        dispatch(setDataUser(response?.data?.customer));
      }
    }
    await dataResponse(dispatch);
    navigation.replace("HomeNav");
  };

  useFocusEffect(
    React.useCallback(() => {
      verificarData();

      return () => {};
    }, [])
  );

  return (
    <View style={[styles.container, { backgroundColor: colorApp }]}>
      <Logo src={require("../assets/logo-solo.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colores.primary,
  },
});
