import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import ButtonComponent from "./ButtonComponent";
import { colores, FontSize } from "../utils/material";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../redux/actions";
import useColors from "../utils/hooks/useColors";
import { handleSubmit } from "../Controllers";
import { toastGenerate } from "../utils/ToastGenerate";
import ModalNegocio from "./ModalNegocio";
import Guardar from "./Guardar";
import { currencyFormat } from "../utils/Utils";

export default function CardProductoList({ producto }) {
  const [modalNegocio, setModalNegocio] = useState(false);

  const {
    name,
    regularPrice: price,
    image,
    allPaMarca,
    reviewCount = 5,
    id,
    reviews,
    databaseId,
    stockStatus,
    preciosNegocio,
  } = producto.node;
  const [like, setLike] = useState(false);

  const dispatch = useDispatch();
  const { viewer, data } = useSelector((state) => state);
  console.log(reviews);
  const navigation = useNavigation();
  const { colorApp } = useColors();
  const calificacionStar = () => {
    let arr = [];
    for (let index = 0; index < parseInt(reviews.averageRating / 2); index++) {
      arr.push(
        <AntDesign
          key={index}
          name="star"
          size={heightPercentageToDP(2)}
          color={colorApp}
        />
      );
    }
    return arr;
  };

  const agregarCarrito = (producto) => {
    return `
    mutation AgregarProducto {
      addCartItems(input: {items: {productId: ${databaseId}, quantity: 1}}) {
        added {
          total
          subtotal
          quantity
          product {
            node {
              name
              id
            }
          }
          key
        }
      }
    }
`;
  };

  const agregarCarritoFun = async () => {
    try {
      let productos = await handleSubmit("GET", agregarCarrito(id), {}, {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductoDetalle", { producto })}
      >
        <Image
          style={{
            width: widthPercentageToDP(40),
            height: widthPercentageToDP(40),
            resizeMode: "contain",
          }}
          source={{ uri: image?.sourceUrl }}
        />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Guardar producto={producto} />
      </View>

      <ButtonComponent
        buttonDisabled={stockStatus === "OUT_OF_STOCK" ? true : false}
        type="verde"
        size="medium"
        widthSize={widthPercentageToDP(40)}
        label={stockStatus === "OUT_OF_STOCK" ? "Agotado" : "Añadir a mi bolsa"}
        rounded="large"
        onPress={() => {
          {
            data.role === "business"
              ? viewer.autorizaciondenegocio.validarNegocio !== null
                ? dispatch(setCarrito({ ...producto, cantidad: 1 }, "sumar"))
                : setModalNegocio(true)
              : dispatch(setCarrito({ ...producto, cantidad: 1 }, "sumar"));
          }
        }}
      />
      <View
        style={{
          justifyContent: "flex-start",
          marginTop: heightPercentageToDP(1),
          marginLeft: widthPercentageToDP(8),
        }}
      >
        <Text numberOfLines={1} ad style={styles.textT}>
          {name?.length > 10 ? name?.slice(0, 10) + "..." : name}
        </Text>
        <Text style={styles.textN}>
          {allPaMarca?.nodes.length > 0 && allPaMarca?.nodes[0].name}
        </Text>
        <Text style={styles.textT}>
          {data.role === "business"
            ? viewer.autorizaciondenegocio.validarNegocio !== null
              ? `${
                  preciosNegocio.precioRegularNegocio
                    ? currencyFormat(preciosNegocio?.precioRegularNegocio)
                    : ""
                }`
              : ""
            : `${currencyFormat(price)}`}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: widthPercentageToDP(25),
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {/*  {reviewCount < 1 ? (
              <AntDesign
                name="star"
                size={heightPercentageToDP(2)}
                color={colorApp}
              />
            ) : (
              calificacionStar()
            )} */}
          </View>

          {/*   <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textS, { color: colorApp }]}>
              {reviewCount}
            </Text>
            <FontAwesome5
              name="smile"
              size={heightPercentageToDP(2)}
              color={colorApp}
            />
          </View> */}
        </View>
      </View>
      <ModalNegocio state={modalNegocio} setState={setModalNegocio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: widthPercentageToDP(45),
    height: heightPercentageToDP(40),
    marginVertical: heightPercentageToDP(1),
  },
  textT: {
    marginTop: heightPercentageToDP(-0.5),
    width: widthPercentageToDP(40),
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  textN: {
    marginTop: heightPercentageToDP(-0.5),
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.small,
  },
  textS: {
    marginRight: widthPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    color: colores.primary,
    fontSize: FontSize.small,
  },
});
