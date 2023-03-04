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
import React from "react";
import Header from "../../Components/Header";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Buscador from "../../Components/Buscador";
import { colores, FontSize } from "../../utils/material";
import { StatusBar } from "expo-status-bar";
import SeccionCategoria from "../../Components/SeccionCategoria";
import ComponenteAtributos from "../../Components/ComponenteAtributos";
import CardProductoList from "../../Components/CardProductoList";
import { handleChange, handleSubmit } from "../../Controllers";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { toastGenerate } from "../../utils/ToastGenerate";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import ModalTodoSFiltros from "../../Components/ModalTodosFiltros";
import { validateStringAndNumber } from "../../utils/Validate";
import useColors from "../../utils/hooks/useColors";
import { Entypo } from "@expo/vector-icons";

export default function Productos({ route }) {
  const [tipos_de_piel_state, setTiposDePielState] = useState([]);
  const { tipos_de_piel } = useSelector((state) => state);
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState({});
  const [filterMarca, setFilterMarca] = useState();
  const [filterCategoria, setFilterCategoria] = useState();
  const [filterSubCategoria, setFilterSubCategoria] = useState();
  const [modalFiltros, setModalFiltros] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState("");
  const { subCategorias } = useSelector((state) => state);
  const { colorApp } = useColors();
  const filter = useRef([]);
  const queryFilterProductos = `
  query NewQuery {
    products(where: {category: "${
      filterSubCategoria?.name
        ? filterSubCategoria?.name
        : filterCategoria
        ? filterCategoria
        : ""
    }",taxonomyFilter: {filters: [{taxonomy: PAMARCA, terms: "${
    filterMarca ? filterMarca : ""
  }", operator: AND},${filter.current}]}, search:"${search}"}) {
      edges {
        node {
          ... on SimpleProduct {
            id
            type
            productTags {
              nodes {
                name
              }
            }
            price(format: RAW)
            regularPrice(format: RAW)
            name
            allPaMarca {
              nodes {
                name
                id
              }
            }
            image {
              sourceUrl
            }
            reviewCount
            databaseId
            reviews {
              averageRating
            }
            stockStatus
            description(format: RAW)
            preciosNegocio {
              precioOfertaNegocio
              precioRegularNegocio
            }
            
          }
            
        }
      }
    }
  }
    `;

  const queryBanner = `
  query NewQuery {
    productCategory(id: "${
      filterCategoria ? filterCategoria : ""
    }", idType: NAME) {
      camposcategoria {
        bannerDeCategoria {
          sourceUrl
        }
      }
    }
  }
  
  `;
  const consultarBanner = async () => {
    try {
      setLoading(true);

      let banner = await handleSubmit("GET", queryBanner, {}, {});

      if (banner.data.productCategory.camposcategoria.bannerDeCategoria) {
        setBanner(
          banner.data.productCategory.camposcategoria.bannerDeCategoria
            .sourceUrl
        );
      } else {
        setBanner("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const consultarProductos = async () => {
    try {
      setLoading(true);

      let productos = await handleSubmit("GET", queryFilterProductos, {}, {});

      setProductos(productos.data.products.edges);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const agregarFiltro = (atributo) => {
    let flag = false;
    if (!atributo.select) {
      filter.current = [...filter.current, atributo.url_filtro];

      flag = true;
    } else {
      filter.current = filter.current.filter((element) => {
        element.terms !== atributo.filtro.terms;
      });
    }
    let aux = tipos_de_piel_state.map((elem) => {
      if (elem.name === atributo.filtro.terms) {
        return { ...elem, select: flag };
      } else {
        return { ...elem };
      }
    });

    setTiposDePielState(aux);
  };
  //reiniciar los filtros de tipo de piel
  /* useFocusEffect(
    useCallback(() => {
      let aux = tipos_de_piel.map((elem) => {
        return { ...elem, select: false };
      });

      setTiposDePielState(aux);

      return () => {
        filter.current = [];
      };
    }, [])
  ); */
  //verificar parametros y segun filtrar
  useEffect(() => {
    if (route.params) {
      const { categoria, subCategoria, marca } = route.params;

      if (categoria) {
        setFilterCategoria(categoria);
      } else {
        setFilterCategoria("");
      }
      if (subCategoria) {
        setFilterSubCategoria(subCategoria);
      } else {
        setFilterSubCategoria("");
      }
      if (marca) {
        setFilterMarca(marca);
      } else {
        setFilterMarca("");
      }
    }
  }, [route.params, subCategorias]);

  //actualizar lista de productos cuando cambie el filtro de tipos de piel o de marca
  useEffect(() => {
    consultarProductos();
  }, [filter.current, filterMarca]);

  //actualizar
  useEffect(() => {
    let aux = tipos_de_piel.map((elem) => {
      return { ...elem, select: false };
    });
    filter.current = [];
    setTiposDePielState(aux);
    consultarProductos();
    if (filterCategoria) {
      consultarBanner();
    }
  }, [filterSubCategoria?.name, filterCategoria]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />

        <Header back={true} />
        <Buscador
          productos
          search={search}
          setSearch={(e) => {
            handleChange(
              e,
              validateStringAndNumber,
              setSearch,
              "search",
              setError,
              error
            );
          }}
          callBack={consultarProductos}
        />
        {error.search && (
          <Text style={[styles.textN, { alignSelf: "center" }]}>
            No se permiten caracteres especiales
          </Text>
        )}
        {banner && (
          <Image
            style={{
              marginTop: heightPercentageToDP(2),
              width: widthPercentageToDP(90),
              height: heightPercentageToDP(6),
              resizeMode: "cover",
              borderRadius: 12,
            }}
            source={{ uri: banner }}
          />
        )}
        {filterCategoria && (
          <SeccionCategoria
            categoria={filterCategoria}
            subCategoria={filterSubCategoria?.name}
          />
        )}

        {filterMarca && (
          <View
            style={{
              width: widthPercentageToDP(90),
              marginTop: heightPercentageToDP(3),
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.textT}>Marca</Text>
            <Text style={styles.textN}>{filterMarca}</Text>
          </View>
        )}
        <View
          style={{
            width: widthPercentageToDP(90),
            marginTop: heightPercentageToDP(3),
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.textT}>Tipos de piel</Text>
          <TouchableOpacity onPress={() => setModalFiltros(true)}>
            <Text style={styles.textN}>Todos los filtros</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: heightPercentageToDP(2),
            width: widthPercentageToDP(90),
            maxHeight: heightPercentageToDP(10),
          }}
        >
          {tipos_de_piel_state?.map((e, i) => {
            return (
              <ComponenteAtributos
                key={i}
                select={e.select}
                nombre={e.name}
                filter={filter.current}
                callback={(name) => {
                  agregarFiltro(name);
                }}
              />
            );
          })}
        </ScrollView>

        {loading ? (
          <ActivityIndicator size={heightPercentageToDP(5)} color={colorApp} />
        ) : (
          <View
            style={{
              alignItems: "center",
              marginTop: heightPercentageToDP(5),
              width: widthPercentageToDP(90),
            }}
          >
            {productos.length < 1 ? (
              <>
                <Entypo
                  name="emoji-sad"
                  size={heightPercentageToDP(7)}
                  color={colorApp}
                />
                <Text style={styles.textSinProductos}>
                  Aún no tenemos productos en esta categoría. ¡Espéralos muy
                  pronto!
                </Text>
              </>
            ) : (
              <ScrollView
                style={{
                  maxWidth: widthPercentageToDP(90),
                }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
              >
                <FlatList
                  style={{ maxWidth: widthPercentageToDP(90) }}
                  data={productos}
                  renderItem={(producto) => {
                    return <CardProductoList producto={producto.item} />;
                  }}
                  numColumns={2}
                  scrollEnabled={false}
                />
              </ScrollView>
            )}
          </View>
        )}
      </ScrollView>
      <ModalTodoSFiltros
        state={modalFiltros}
        setState={setModalFiltros}
        filtros={{
          marca: { filterMarca, setFilterMarca },
          subCategoria: { filterSubCategoria, setFilterSubCategoria },
          categoria: { filterCategoria, setFilterCategoria },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.background,
    alignItems: "center",
    flex: 1,
  },
  box: {
    alignItems: "center",
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
    color: colores.text,
    fontSize: FontSize.small,
  },
  textSinProductos: {
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    color: colores.text,
    fontSize: FontSize.small,
  },
});
