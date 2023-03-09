import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Header from "../../../Components/Header";
import Buscador from "../../../Components/Buscador";
import useColors from "../../../utils/hooks/useColors";
import Categoria from "../../../Components/Categoria";
import { useSelector } from "react-redux";

export default function CategoriasCompletas() {
  const { colorApp } = useColors();
  const { categorias } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header back />
        <Buscador />
        <View style={styles.box}>
          <Text style={[styles.title]}>Categorías</Text>
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
              style={{
                maxWidth: widthPercentageToDP(90),
              }}
              data={categorias}
              renderItem={(categoria) => {
                return (
                  <Categoria
                    width={30}
                    categoria={categoria.item.children.nodes}
                    title={categoria.item.name}
                    imagen={categoria.item.image?.sourceUrl}
                  />
                );
              }}
              numColumns={3}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </ScrollView>
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
    marginTop: heightPercentageToDP(2),
    alignItems: "center",
    width: widthPercentageToDP(90),

    justifyContent: "flex-start",
  },
  title: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.large,
    color: colores.neutro,
  },
});
