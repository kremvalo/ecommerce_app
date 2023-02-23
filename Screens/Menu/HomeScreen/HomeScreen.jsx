import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import { array } from ".";
import { styles } from "./styles";
import { HeaderInfo } from "./components";

import Buscador from "../../../Components/Buscador";
import Banner from "../../../Components/Banner";
import Categoria from "../../../Components/Categoria";
import Marca from "../../../Components/Marca";
import Header from "../../../Components/Header";
import {
  CardProduct,
  CardProductItem,
  TitleSection,
} from "../../../Components";
import startGetAllCategories from "../../../queries/getAllCategories";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { categorias } = useSelector((state) => state);

  useEffect(() => {
    startGetAllCategories(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />
        <Header />
        {/* <Buscador /> */}
        <HeaderInfo />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 15,
            width: widthPercentageToDP(90),
          }}
        >
          {array.map((e, i) => {
            return <Banner key={i} source={e} />;
          })}
        </ScrollView>
        {/* Categories Section */}
        <TitleSection title="Categorias" />
        <FlatList
          horizontal
          data={categorias?.slice(0, 8)}
          style={{ maxWidth: widthPercentageToDP(90) }}
          renderItem={({ item }) => (
            <Categoria
              title={item.name}
              image={item.image?.sourceUrl}
              categoria={item.children.nodes}
            />
          )}
        />
        {/* Special offer Section */}
        <TitleSection title="Oferta especial" hasIcon bottom={10} />
        <FlatList
          horizontal
          data={categorias}
          showsHorizontalScrollIndicator={false}
          style={{ maxWidth: widthPercentageToDP(90) }}
          renderItem={({ item }) => <CardProduct />}
        />

        {/* Popular products Section */}
        <TitleSection title="Productos populares" />
        <FlatList
          horizontal
          data={categorias}
          showsHorizontalScrollIndicator={false}
          style={{ maxWidth: widthPercentageToDP(90) }}
          renderItem={({ item }) => <CardProductItem />}
        />
      </ScrollView>
    </View>
  );
}
