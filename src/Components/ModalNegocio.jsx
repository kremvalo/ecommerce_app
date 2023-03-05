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

export default function ModalNegocio({ state, setState }) {
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
              source={require("../assets/modalnegocio.png")}
            />
            <Text style={styles.modalText}>
              Estamos validando tus datos como empresa. Por el momento no puedes
              ver nuestros precios por políticas de privacidad. Este proceso
              tarde de 1 a 2 días hábiles. Te invitamos a explorar nuestra app y
              que descubras la magia de Vherona.{" "}
            </Text>
            <ButtonComponent
              style={{ marginTop: heightPercentageToDP(5) }}
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
