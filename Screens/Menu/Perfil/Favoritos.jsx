import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores, FontSize } from "../../../utils/material";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Header from "../../../Components/Header";
import useColors from "../../../utils/hooks/useColors";
import { useSelector } from "react-redux";
import CardProductoList from "../../../Components/CardProductoList";

export default function Favoritos() {
  const { colorApp } = useColors();
  const { favoritos } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header back />
        <View style={styles.box}>
          <Text style={[styles.title, { color: colorApp }]}>Favoritos</Text>
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
              data={favoritos}
              renderItem={(producto) => {
                return <CardProductoList producto={producto.item} />;
              }}
              numColumns={2}
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

    width: widthPercentageToDP(90),

    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: FontSize.large,
  },
});
