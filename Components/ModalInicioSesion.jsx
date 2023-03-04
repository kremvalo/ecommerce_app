import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";

export default function ModalIniciaSesion({ state, setState }) {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: widthPercentageToDP(70),
                resizeMode: "contain",
                height: widthPercentageToDP(10),
                marginVertical: heightPercentageToDP(1),
              }}
              source={require("../assets/logo.png")}
            />
            <Text style={styles.modalText}>
              Para continuar con tu pedido es necesario iniciar sesion
            </Text>

            <ButtonComponent
              style={{ marginTop: heightPercentageToDP(5) }}
              type="rojo"
              size="small"
              widthSize={widthPercentageToDP(40)}
              label="Iniciar sesión"
              rounded="large"
              onPress={() => {
                navigation.navigate("InicioMenu", { filter: "cliente" });
                setState(false);
              }}
            />
            <ButtonComponent
              type="rojo"
              size="small"
              widthSize={widthPercentageToDP(40)}
              label="Soy un negocio"
              rounded="large"
              onPress={() => {
                navigation.navigate("InicioMenu", { filter: "negocio" });
                setState(false);
              }}
            />
            <ButtonComponent
              type="verde"
              size="small"
              widthSize={widthPercentageToDP(40)}
              label="Cerrar"
              rounded="large"
              onPress={() => setState(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(45),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    fontSize: FontSize.small,
  },
});
