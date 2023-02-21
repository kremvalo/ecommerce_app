import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import * as SecureStore from "expo-secure-store";
import { colores, FontSize } from "../utils/material";
import { toastGenerate } from "../utils/ToastGenerate";
import { handleSubmit } from "../Controllers";
import { cleanCarrito, setDataUser, setJwt } from "../redux/actions";
export default function MenuDerechoContenido({ route }) {
  const { jwt, data } = useSelector((state) => state);
  const { token } = jwt;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cerrarSesion = async () => {
    try {
      await SecureStore.deleteItemAsync("jwt");
      dispatch(setJwt(""));
      dispatch(setDataUser({}));
      dispatch(cleanCarrito());
      toastGenerate("Sesion Cerrada Correctamente");
      navigation.replace("Splash");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        height: heightPercentageToDP(80),
        paddingHorizontal: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(10),
        justifyContent: "flex-start",
        borderRadius: 50,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        /*  onPress={() => {
        navigation.navigate("Rol");
      }} */
      >
        <AntDesign
          style={{ width: widthPercentageToDP(6) }}
          name="left"
          size={heightPercentageToDP(2)}
          color={colores.text}
        />
        <Text style={styles.textS}>¡Hola, {data?.billing?.firstName}!</Text>
      </TouchableOpacity>

      <View style={{ marginLeft: widthPercentageToDP(6) }}>
        {token ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Text style={styles.textN}>Mi Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
              <Text style={styles.textN}>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("TodosLosPedidos")}
            >
              <Text style={styles.textN}>Pedidos</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InicioMenu", { filter: "cliente" });
              }}
            >
              <Text style={styles.textN}>Inicia sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InicioMenu", { filter: "negocio" });
              }}
            >
              <Text style={styles.textN}>Soy un negocio</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("Contactanos")}>
          <Text style={styles.textN}>Contacto</Text>
        </TouchableOpacity>

        <Text style={styles.textN}>Acerca de Vherona</Text>
        {jwt && (
          <TouchableOpacity
            onPress={() => {
              cerrarSesion();
            }}
          >
            <Text style={styles.textN}>Cerrar sesión</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textT: {
    width: widthPercentageToDP(40),

    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.large,
  },
  textS: {
    width: widthPercentageToDP(40),
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.medium,
    marginVertical: heightPercentageToDP(1),
  },
});
