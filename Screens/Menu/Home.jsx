import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../../Components/Header";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Buscador from "../../Components/Buscador";
import { colores, FontSize } from "../../utils/material";
import { StatusBar } from "expo-status-bar";
import Banner from "../../Components/Banner";
import Categoria from "../../Components/Categoria";
import Marca from "../../Components/Marca";
import { useSelector } from "react-redux";
import useColors from "../../utils/hooks/useColors";

const array = [
  require("../../assets/banner.png"),
  require("../../assets/banner.png"),
  require("../../assets/banner.png"),
  require("../../assets/banner.png"),
];
const subCategorias = [
  ["moda", "piel", "hojas", "etc", "etc"],
  ["hojas", "piel", "hojas", "etc", "etc"],
  ["etc", "piel", "hojas", "etc", "etc"],
  ["piel", "piel", "hojas", "etc", "etc"],
  ["etc", "piel", "hojas", "etc", "etc"],
  ["moda", "piel", "hojas", "etc", "etc"],
  ["moda", "piel", "hojas", "etc", "etc"],
  ["moda", "piel", "hojas", "etc", "etc"],
];
/* const categorias = [
  { subCategorias: subCategorias[0], title: "Cuidado facial" },
  { subCategorias: subCategorias[1], title: "Titutlo 1" },
  { subCategorias: subCategorias[2], title: "Titutlo 2" },
  { subCategorias: subCategorias[3], title: "Titutlo 3" },
  { subCategorias: subCategorias[4], title: "Titutlo 4" },
  { subCategorias: subCategorias[5], title: "Titutlo 5" },
  { subCategorias: subCategorias[6], title: "Titutlo 6" },
  { subCategorias: subCategorias[7], title: "Titutlo 7" },
]; */
/* const marcas = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; */

export default function Home({ navigation }) {
  const { categorias, marcas, favoritos } = useSelector((state) => state);

  const { colorApp } = useColors();

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />

        <Header />
        <Buscador />

        <View
          style={{
            width: widthPercentageToDP(90),
            marginTop: heightPercentageToDP(3),
          }}
        >
          <Text style={styles.textT}>Promos e imperdibles</Text>
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
          {array.map((e, i) => {
            return <Banner key={i} source={e} />;
          })}
        </ScrollView>

        <View
          style={{
            width: widthPercentageToDP(90),
            marginTop: heightPercentageToDP(3),
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.textT}>Categorias</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoriasCompletas")}
          >
            <Text style={styles.textN}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <ScrollView
            style={{ maxWidth: widthPercentageToDP(90) }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          >
            <FlatList
              style={{
                maxWidth: widthPercentageToDP(90),
              }}
              data={categorias?.slice(0, 8)}
              renderItem={(categoria) => {
                return (
                  <Categoria
                    categoria={categoria.item.children.nodes}
                    title={categoria.item.name}
                    imagen={categoria.item.image?.sourceUrl}
                  />
                );
              }}
              numColumns={4}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
        <View
          style={{
            width: widthPercentageToDP(90),
            marginTop: heightPercentageToDP(3),
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.textT}>Marcas recomendadas</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MarcasCompletas")}
          >
            <Text style={styles.textN}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        {marcas.map((e, i) => {
          return <Marca key={i} marca={e} />;
        })}
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
  box: {
    alignItems: "center",
  },
  textT: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.neutro,
    fontSize: FontSize.medium,
  },
  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.neutro,
    fontSize: FontSize.small,
  },
  participantView: {
    borderBottomColor: "black",
    width: "100%",
    borderBottomWidth: 1,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fffbeb",
  },
  listView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 30,
  },
});
