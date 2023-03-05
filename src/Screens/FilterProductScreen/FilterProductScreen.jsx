import React from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { filters } from ".";
import { styles } from "./styles";
import { CategoryCard, FilterButton, SearchFilter } from "./components";

import {
  Header,
  RenderItem,
  CardProduct,
  TitleSection,
  MainContainer,
  CardProductItem,
} from "../../Components";

function FilterProductScreen({ route }) {
  const { name, image } = route.params;
  const { offerProducts, popularProducts } = useSelector((state) => state);

  return (
    <MainContainer hasHeader={<Header />}>
      <CategoryCard category={name} image={image} />
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
        data={offerProducts}
        style={{ paddingLeft: wp(5) }}
        ItemSeparatorComponent={RenderItem}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isEnd = index === offerProducts.length - 1;
          return <CardProduct isEnd={isEnd} item={item} />;
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
        data={popularProducts}
        style={{ paddingLeft: wp(5) }}
        ItemSeparatorComponent={RenderItem}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isEnd = index === popularProducts.length - 1;
          return (
            <CardProductItem
              item={item}
              isEnd={isEnd}
              onPress={() => navigation.navigate("ProductoDetalle")}
            />
          );
        }}
      />
    </MainContainer>
  );
}

export default FilterProductScreen;
