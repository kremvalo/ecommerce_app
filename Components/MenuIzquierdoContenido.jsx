import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colores, FontSize } from "../utils/material";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MenuIzquierdoContenido({ routes }) {
  const { subCategorias, tituloSubCategoria } = useSelector((state) => state);

  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: widthPercentageToDP(3),
        marginTop: heightPercentageToDP(10),
        justifyContent: "flex-start",
        borderRadius: 50,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <AntDesign
          style={{ width: widthPercentageToDP(6) }}
          name="left"
          size={heightPercentageToDP(2)}
          color={colores.text}
        />
        <Text style={styles.textT}>{tituloSubCategoria}</Text>
      </TouchableOpacity>

      <View style={{ marginLeft: widthPercentageToDP(6) }}>
        <Text style={styles.textS}>Subcategorias</Text>
        {subCategorias?.map((ele, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("Productos", {
                  categoria: tituloSubCategoria,
                  subCategoria: ele,
                })
              }
            >
              <Text style={styles.textN}>{ele?.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textT: {
    width: widthPercentageToDP(40),

    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.large,
  },
  textS: {
    width: widthPercentageToDP(40),
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.text,
    fontSize: FontSize.medium,
  },
  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.text,
    fontSize: FontSize.medium,
    marginVertical: heightPercentageToDP(1),
  },
});
