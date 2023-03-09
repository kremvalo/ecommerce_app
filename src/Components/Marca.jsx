import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import { colores, FontSize } from "../utils/material";
import ButtonComponent from "./ButtonComponent";
import { useNavigation } from "@react-navigation/native";

export default function Marca({ marca }) {
  const { name, camposTaxonomia } = marca;
  const { image = { link: "", sourceUrl: "" } } = camposTaxonomia;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colores.aux,
          justifyContent: "center",
          alignItems: "center",
          width: widthPercentageToDP(45),
          height: heightPercentageToDP(10),
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: widthPercentageToDP(45),
            height: heightPercentageToDP(10),
          }}
          source={{ uri: image?.sourceUrl }}
        />
      </View>
      <View style={{ marginLeft: widthPercentageToDP(5) }}>
        <Text style={styles.textT}>{name}</Text>
        <Text style={styles.textN}>Cuidado de la piel</Text>
        <View style={{ flexDirection: "row", width: widthPercentageToDP(45) }}>
          {/*   <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign
              name="star"
              size={heightPercentageToDP(4)}
              color={colores.secondary}
            />
            <Text
              style={{
                position: "absolute",

                fontFamily: "Poppins_600SemiBold",
                color: colores.white,
                fontSize: FontSize.small,
              }}
            >
              5
            </Text>
          </View> */}
          <ButtonComponent
            type="rojo"
            widthSize={widthPercentageToDP(35)}
            label="Ver productos"
            rounded="large"
            size="medium "
            onPress={() => navigation.navigate("Productos", { marca: name })}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textT: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.black,
    fontSize: FontSize.medium,
  },
  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.black,
    fontSize: FontSize.small,
  },
});
