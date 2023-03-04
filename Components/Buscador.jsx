import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

import { colores, FontSize } from "../utils/material";
import useColors from "../utils/hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { handleChange } from "../Controllers";

export default function Buscador({ productos, search, setSearch, callBack }) {
  const navigation = useNavigation();
  const { colorApp } = useColors();
  return (
    <>
      {productos ? (
        <View
          style={styles.container}
          onPress={() => navigation.navigate("Productos")}
        >
          <TextInput
            onChangeText={(e) => {
              if (e === "") {
                callBack();
              }

              setSearch(e);
            }}
            style={[styles.input, { color: colorApp }]}
            placeholder="Buscar..."
          />
          <TouchableOpacity onPress={callBack}>
            <AntDesign
              name="search1"
              size={heightPercentageToDP(2.5)}
              color={colorApp}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate("Productos")}
        >
          <Text style={[styles.textN, { color: colorApp }]}>Buscar...</Text>
          <AntDesign
            name="search1"
            size={heightPercentageToDP(2.5)}
            color={colorApp}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    height: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(8),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textN: {
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.primary,
  },
  input: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(60),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
  },
});
