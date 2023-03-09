import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Header from "../../../Components/Header";
import ButtonComponent from "../../../Components/ButtonComponent";
import { useSelector } from "react-redux";
import CardCarrito from "../../../Components/CardCarrito";
import { useEffect } from "react";
import { handleSubmit } from "../../../Controllers";
import { toastGenerate } from "../../../utils/ToastGenerate";
import ModalIniciaSesion from "../../../Components/ModalInicioSesion";
import { currencyFormat } from "../../../utils/Utils";

export default function Carrito({ navigation }) {
  const { viewer, data, carrito, jwt } = useSelector((state) => state);
  const [suma, setSuma] = useState(0);
  const [modalInicioSesion, setModalInicioSesion] = useState(false);

  const itemsCarrito = (data) => {
    return `
  mutation MyMutation2 {
   
    addCartItems(
      input: {clientMutationId: "", items:[${data}]}
    ) {
      added {
        total
        product {
          node {
            name
          }
        }
      }
    }
    
  }
    `;
  };

  const limpiarCarrito = `
    mutation MyMutation2 {
      emptyCart(input: {clientMutationId: ""}) {
      cart {
        contents {
          nodes {
            product {
              node {
                name
              }
            }
          }
        }
      }
    }
    
    
  }
      `;

  const consultarCarrito = `
      query MyQuery {
        cart {
          contents {
            productCount
          }
        }
      }
      `;

  const actualizarSubTotal = () => {
    let aux = 0;

    carrito?.forEach((i) => {
      console.log(i);
      aux =
        aux +
        parseInt(i.cantidad) *
          parseInt(
            data.role === "business"
              ? viewer.autorizaciondenegocio.validarNegocio
                ? i.node.preciosNegocio.precioRegularNegocio
                : i.node.regularPrice
              : i.node.regularPrice
          );
    });

    /* carrito?.forEach((i) => {
      console.log(i);
      aux =
        aux +
        parseInt(i.cantidad) *
          parseInt(
           
          );
    }); */

    console.log(aux, "carrito");
    setSuma(aux);
  };

  useEffect(() => {
    actualizarSubTotal();
  }, [carrito]);

  const cargarCarrito = async () => {
    let aux = carrito.map((e) => {
      return `{productId:${e.node.databaseId},quantity:${e.cantidad}}`;
    });

    console.log(itemsCarrito(aux));

    await handleSubmit("GET", limpiarCarrito, {}, {}, jwt.token);
    await handleSubmit("GET", itemsCarrito(aux), {}, {}, jwt.token);
    navigation.navigate("CrearOrden");
  };

  return (
    <View style={styles.container}>
      <Header back />
      <View style={styles.box}>
        <ScrollView
          style={{
            maxHeight: heightPercentageToDP(60),
            maxWidth: widthPercentageToDP(90),
          }}
        >
          {carrito?.map((item, i) => {
            return <CardCarrito producto={item} key={i} />;
          })}
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <View>
          <Text style={styles.subTotal}>Subtotal</Text>
          <Text style={styles.price}>{currencyFormat(suma)}</Text>
        </View>
        <ButtonComponent
          type="verde"
          size="medium"
          widthSize={widthPercentageToDP(40)}
          label="Ir a pagar"
          rounded="large"
          onPress={() => {
            if (!jwt) {
              setModalInicioSesion(true);
              return;
            }

            if (carrito.length !== 0) {
              cargarCarrito();
            }
          }}
        />
      </View>
      <ModalIniciaSesion
        state={modalInicioSesion}
        setState={setModalInicioSesion}
      />
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
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    width: widthPercentageToDP(90),
    flex: 1,
    justifyContent: "flex-start",
  },
  bottom: {
    justifyContent: "space-around",
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(20),
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  subTotal: {
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  price: {
    fontFamily: "Poppins_700Bold",
    color: colores.neutro,
    fontSize: FontSize.Elarge,
  },
});
