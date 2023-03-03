import React from "react";
import { useSelector } from "react-redux";
import { View, Text, ScrollView, FlatList } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { filters } from ".";
import { styles } from "./styles";
import CategoryCard from "./components/CategoryCard";
import FilterButton from "./components/FilterButton";

import {
  Header,
  CardProduct,
  TitleSection,
  CardProductItem,
} from "../../../Components";
import SearchFilter from "./components/SearchFilter";

const RenderItem = () => <View style={{ width: 20 }} />;

function FilterProductScreen() {
  const { categorias } = useSelector((state) => state);
  return (
    <>
      <Header />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <CategoryCard />
        <SearchFilter />
        <View style={styles.textFilter}>
          <Text style={styles.text}>Filtros</Text>
          <FlatList
            horizontal
            data={filters}
            style={styles.sectionFilter}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <FilterButton name={item.name} />}
          />
        </View>
        <View style={styles.titleSection}>
          <TitleSection title="Oferta especial" hasIcon />
        </View>
        <FlatList
          horizontal
          data={categorias}
          style={{ paddingLeft: wp(6) }}
          ItemSeparatorComponent={RenderItem}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isEnd = index === categorias.length - 1;
            return <CardProduct isEnd={isEnd} />;
          }}
        />
        <View style={styles.titleSection}>
          <TitleSection
            title="Productos populares"
            onPress={() => navigation.navigate("ProductoDetalle")}
          />
        </View>
        <FlatList
          horizontal
          data={categorias}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProductItem
              onPress={() => navigation.navigate("ProductoDetalle")}
            />
          )}
        />
      </ScrollView>
    </>
  );
}

export default FilterProductScreen;
