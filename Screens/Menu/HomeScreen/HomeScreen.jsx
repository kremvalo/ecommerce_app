import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { HeaderInfo } from "./components";

import Header from "../../../Components/Header";
import Banner from "../../../Components/Banner";
import Categoria from "../../../Components/Categoria";
import {
  CardProduct,
  CardProductItem,
  MainContainer,
  RenderItem,
  TitleSection,
} from "../../../Components";

import startGetBannerInfo from "../../../queries/getBannerInfo";
import startGetAllCategories from "../../../queries/getAllCategories";
import startGetOfferProducts from "../../../queries/getOfferProducts";
import startGetPopularProducts from "../../../queries/getPopularProducts";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { banners, categories, offerProducts, popularProducts } = useSelector(
    (state) => state
  );

  useEffect(() => {
    startGetBannerInfo(dispatch);
    startGetOfferProducts(dispatch);
    startGetAllCategories(dispatch);
    startGetPopularProducts(dispatch);
  }, []);

  return (
    <MainContainer hasHeader={<Header />} ph={6}>
      <HeaderInfo />
      {/* Banner Section */}
      <FlatList
        horizontal
        data={banners}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 15, maxWidth: wp(90) }}
        renderItem={({ item }) => <Banner source={item} />}
      />
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
            onPress={() =>
              navigation.navigate("FilterProductScreen", {
                name: item.name,
                image: item.image.mediaItemUrl,
              })
            }
          />
        )}
      />
      {/* Special offer Section */}
      <TitleSection title="Oferta especial" hasIcon bottom={10} />
      <FlatList
        horizontal
        data={offerProducts}
        style={{ maxWidth: wp(90) }}
        ItemSeparatorComponent={RenderItem}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardProduct
            item={item}
            onPress={() => navigation.navigate("ProductoDetalle")}
          />
        )}
      />

      {/* Popular products Section */}
      <TitleSection title="Productos populares" />
      <FlatList
        horizontal
        data={popularProducts}
        style={{ maxWidth: wp(90) }}
        ItemSeparatorComponent={RenderItem}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardProductItem
            item={item}
            onPress={() => navigation.navigate("ProductoDetalle")}
          />
        )}
      />
    </MainContainer>
  );
}
