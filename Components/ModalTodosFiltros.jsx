import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import ButtonComponent from "./ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { cambiarSubCategorias } from "../redux/actions";

export default function ModalTodoSFiltros({ state, setState, filtros }) {
  const { subCategorias, tituloSubCategoria, categorias, marcas } = useSelector(
    (state) => state
  );
  const { marca, subCategoria, categoria } = filtros;

  const navigation = useNavigation();
  const dispatch = useDispatch();
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
            <ScrollView>
              <Text style={styles.textS}>Categorias</Text>
              {categorias.map((elem, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      dispatch(
                        cambiarSubCategorias({
                          categoria: elem.children.nodes,
                          title: elem.name,
                        })
                      );
                      categoria.setFilterCategoria(elem.name);
                      subCategoria.setFilterSubCategoria({});
                    }}
                  >
                    <Text
                      style={[
                        styles.textN,
                        {
                          color:
                            categoria?.filterCategoria === elem.name
                              ? colores.success
                              : colores.text,
                        },
                      ]}
                    >
                      {elem.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  categoria.setFilterCategoria("");
                }}
              >
                <Text style={[styles.textN]}>Todo</Text>
              </TouchableOpacity>

              <View style={{}}>
                <Text style={styles.textS}>Subcategorias</Text>
                {subCategorias.map((ele, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        subCategoria.setFilterSubCategoria(ele);
                        categoria.setFilterCategoria(tituloSubCategoria);
                      }}
                    >
                      <Text
                        style={[
                          styles.textN,
                          {
                            color:
                              subCategoria?.filterSubCategoria?.name ===
                              ele.name
                                ? colores.success
                                : colores.text,
                          },
                        ]}
                      >
                        {ele?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
                <TouchableOpacity
                  onPress={() => {
                    subCategoria.setFilterSubCategoria({});
                  }}
                >
                  <Text style={[styles.textN]}>Todo</Text>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Text style={styles.textS}>Marcas</Text>
                {marcas.map((ele, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        marca.setFilterMarca(ele.name);
                      }}
                    >
                      <Text
                        style={[
                          styles.textN,
                          {
                            color:
                              marca?.filterMarca === ele.name
                                ? colores.success
                                : colores.text,
                          },
                        ]}
                      >
                        {ele?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}

                <TouchableOpacity
                  onPress={() => {
                    marca.setFilterMarca("");
                  }}
                >
                  <Text style={[styles.textN]}>Todo</Text>
                </TouchableOpacity>
              </View>
              <ButtonComponent
                style={{
                  marginTop: heightPercentageToDP(5),
                  alignSelf: "center",
                }}
                type="verde"
                size="small"
                widthSize={widthPercentageToDP(40)}
                label="Cerrar"
                rounded="large"
                onPress={() => setState(false)}
              />
            </ScrollView>
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
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(80),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

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
