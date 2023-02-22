import React from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
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
import { TitleSection } from "../../../Components";

export default function HomeScreen({ navigation }) {
  const { categorias, marcas } = useSelector((state) => state);

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
        <TitleSection title="Oferta especial" />
        {marcas.map((e, i) => {
          return <Marca key={i} marca={e} />;
        })}

        {/* Popular products Section */}
        <TitleSection title="Productos populares" />
        {marcas.map((e, i) => {
          return <Marca key={i} marca={e} />;
        })}
      </ScrollView>
    </View>
  );
}
