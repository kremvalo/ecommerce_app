import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const { categorias, categories } = useSelector((state) => state);

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
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("FilterProductScreen")}
        >
          <Text>Navigate</Text>
        </TouchableOpacity> */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15, width: wp(90) }}
        >
          {array.map((e, i) => {
            return <Banner key={i} source={e} />;
          })}
        </ScrollView>
        {/* Categories Section */}
        <TitleSection title="Categorias" />
        <FlatList
          horizontal
          data={categories}
          style={{ maxWidth: wp(90) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Categoria
              title={item.name}
              categoria={item.name}
              image={item.image.mediaItemUrl}
            />
          )}
        />
        {/* Special offer Section */}
        <TitleSection title="Oferta especial" hasIcon bottom={10} />
        <FlatList
          horizontal
          data={categorias}
          style={{ maxWidth: wp(90) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProduct
              onPress={() => navigation.navigate("ProductoDetalle")}
            />
          )}
        />

        {/* Popular products Section */}
        <TitleSection title="Productos populares" />
        <FlatList
          horizontal
          data={categorias}
          style={{ maxWidth: wp(90) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProductItem
              onPress={() => navigation.navigate("ProductoDetalle")}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}
