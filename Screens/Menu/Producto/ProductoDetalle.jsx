import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Dots from "react-native-dots-pagination";
import Header from "../../../Components/Header";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
const atributos = ["Exfoliante", "Piel sensible", "Hidratante"];
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import ButtonComponent from "../../../Components/ButtonComponent";
import Contador from "../../../Components/Contador";
import CardProductoList from "../../../Components/CardProductoList";
import useColors from "../../../utils/hooks/useColors";
import { useDispatch, useSelector } from "react-redux";
import { setCarrito } from "../../../redux/actions";
import { toastGenerate } from "../../../utils/ToastGenerate";
import { useEffect } from "react";
import { handleSubmit } from "../../../Controllers";
import CardProoductVariation from "../../../Components/CardProductVariation";
import CardProductVariation from "../../../Components/CardProductVariation";
import Guardar from "../../../Components/Guardar";
import { currencyFormat } from "../../../utils/Utils";
export default function ProductoDetalle({ navigation, route }) {
  // const {
  //   name,
  //   regularPrice: price,
  //   image,
  //   allPaMarca,
  //   reviewCount = 5,
  //   id,
  //   databaseId = 2522,
  //   productTags,
  //   stockStatus,
  //   description,
  //   preciosNegocio,
  //   type,
  //   reviews,
  // } = route.params.producto.node;
  // console.log(preciosNegocio);
  const { colorApp } = useColors();
  const [recomendados, setRecomendados] = useState([]);
  const [contador, setContador] = useState(1);
  const { data, viewer, jwt, carrito } = useSelector((state) => state);
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const [variations, setVariations] = useState([]);
  const [loading, setLoading] = useState(false);

  /* const queryProductVariableId = `
  query NewQuery {
    variableProduct(id: ${databaseId}, idType: DATABASE_ID) {
      id
      type
      price(format: RAW)
      name
      image {
        sourceUrl
      }
      reviewCount
      databaseId
      description(format: RAW)
      salePrice(format: RAW)
      stockStatus
      variations {
        edges {
          node {
            attributes {
              edges {
                node {
                  name
                  id
                }
              }
            }
            image {
              sourceUrl
            }
            id
            databaseId
            price(format: RAW)
            name
            stockStatus
            description
          }
        }
      }
      allPaMarca {
        nodes {
          name
          id
        }
      }
    }
  }
    `;

  const consultarData = async () => {
    try {
      console.log("ejecutando");
      let producto = await handleSubmit(
        "GET",
        queryProductVariableId,
        {},
        {}.jwt
      );

      setVariations(producto.data.variableProduct.variations.edges);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "VARIABLE") {
      consultarData();
    } else {
      setVariations([]);
    }
  }, [databaseId]); */

  // useEffect(() => {
  //   consultarData();
  //   console.log(databaseId);
  // }, [databaseId]);

  const consultarData = async () => {
    try {
      setLoading(true);
      console.log("ejecutando");
      let producto = await handleSubmit(
        "GET",
        queryRecomendados,
        {},
        {},
        jwt.token
      );

      setRecomendados(producto.data.simpleProduct.upsell.edges);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // const queryRecomendados = `query MyQuery2 {
  //   simpleProduct(id: "${databaseId}", idType: DATABASE_ID) {

  //     upsell {
  //       edges {
  //         node {
  //           ... on SimpleProduct {
  //               id
  //     type
  //     productTags {
  //       nodes {
  //         name
  //       }
  //     }
  //     price(format: RAW)
  //     regularPrice(format: RAW)
  //     name
  //     allPaMarca {
  //       nodes {
  //         name
  //         id
  //       }
  //     }
  //     image {
  //       sourceUrl
  //     }
  //     reviewCount
  //     databaseId
  //     stockStatus
  //     description(format: RAW)
  //     preciosNegocio {
  //       precioOfertaNegocio
  //       precioRegularNegocio
  //     }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }`;

  // const atributosProducto = () => {
  //   return productTags?.nodes?.slice(0, 3)?.map((e, i) => {
  //     return (
  //       <View
  //         key={i}
  //         style={{
  //           paddingHorizontal: widthPercentageToDP(3),
  //           marginHorizontal: widthPercentageToDP(2),
  //           borderRadius: 5,
  //           alignItems: "center",
  //           justifyContent: "center",
  //           backgroundColor: colores.aux,
  //           height: heightPercentageToDP(5),
  //         }}
  //       >
  //         <Text style={styles.textA}>{e.name}</Text>
  //       </View>
  //     );
  //   });
  // };

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

  // useEffect(() => {
  //   setContador(1);

  //   return () => {};
  // }, [name]);

  return (
    <View style={styles.container}>
      <Header back={true} />
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Carousel
            loop
            width={widthPercentageToDP(100)}
            height={heightPercentageToDP(40)}
            autoPlay={true}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            onProgressChange={(_, absoluteProgress) => {
              if (absoluteProgress % 1 >= 0.5) {
                setProgressValue(Math.round(absoluteProgress) - 1);
              }
            }}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            pagingEnabled
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: widthPercentageToDP(80),
                    height: widthPercentageToDP(80),
                    resizeMode: "contain",
                  }}
                  source={require("../../../assets/product.png")}
                />
              </View>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 100,
              alignSelf: "center",
            }}
          >
            <Dots
              length={6}
              active={progressValue}
              activeColor="#FFADB0"
              passiveColor="#F5F5F5"
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {atributosProducto()}
          </View>
        </View>

        <View
          style={{
            marginTop: heightPercentageToDP(2),
            backgroundColor: "#FEFCFC",
            paddingVertical: 14,
            paddingHorizontal: 24,
            width: widthPercentageToDP(100),
            alignItems: "center",
          }}
        >
          <View style={{ width: widthPercentageToDP(90) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "flex-start",
                  width: widthPercentageToDP(60),
                }}
              >
                <Text style={styles.textN}>
                  {allPaMarca.nodes.length > 0 && allPaMarca.nodes[0].name}
                </Text>
                /*<Text style={styles.textT}>{name}</Text>
                <Text style={styles.textT}>{name}</Text>
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

                  {/* <View style={{ flexDirection: "row" }}>
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

              <View>
                {/* <Text style={styles.textT}>
                  {data.role === "business"
                    ? viewer.autorizaciondenegocio.validarNegocio !== null
                      ? `${
                          preciosNegocio.precioRegularNegocio
                            ? currencyFormat(
                                preciosNegocio?.precioRegularNegocio
                              )
                            : ''
                        }`
                      : ''
                    : `${currencyFormat(price)}`}
                </Text> */}
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Contador contador={contador} setContador={setContador} />
              {/* <Guardar producto={route.params.producto} /> */}
              <ButtonComponent
                // buttonDisabled={stockStatus === "OUT_OF_STOCK" ? true : false}
                type="verde"
                size="medium"
                widthSize={widthPercentageToDP(35)}
                // label={
                //   stockStatus === "OUT_OF_STOCK"
                //     ? "Agotado"
                //     : "Añadir a mi bolsa"
                // }
                rounded="large"
                // onPress={() => {
                //   data.role === "business"
                //     ? viewer.autorizaciondenegocio.validarNegocio !== null
                //       ? dispatch(
                //           setCarrito({
                //             ...route.params.producto,
                //             cantidad: contador,
                //           })
                //         )
                //       : toastGenerate("No se ha verificado el negocio")
                //     : dispatch(
                //         setCarrito({
                //           ...route.params.producto,
                //           cantidad: contador,
                //         })
                //       );
                // }}
              />
            </View>
            <Text style={styles.description}>Lorem ipsum</Text>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: heightPercentageToDP(2),
            width: widthPercentageToDP(100),
            backgroundColor: colores.white,
            padding: widthPercentageToDP(5),
            paddingHorizontal: widthPercentageToDP(5),
          }}
        >
          {/* <Text style={{ ...styles.textT, color: colores.neutro }}>
            Recomendados:
          </Text>
           {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ maxWidth: widthPercentageToDP(100) }}
              data={recomendados}
              renderItem={(producto) => {
                return <CardProductoList producto={producto.item} />
              }}
            />
          )} */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.background,
    alignItems: "center",
    flex: 1,
  },
  textA: {
    fontFamily: "Poppins_500Medium",
    color: colores.neutro,
    fontSize: FontSize.small,
  },
  textT: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.medium,
  },

  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.primary,
    fontSize: FontSize.medium,
  },
  textS: {
    marginRight: widthPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    color: colores.primary,
    fontSize: FontSize.small,
  },
  description: {
    fontFamily: "Poppins_300Light",
    color: colores.neutro,
    fontSize: FontSize.small,
  },
});
