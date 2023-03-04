import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Feather, Entypo } from "@expo/vector-icons";
import { colores, FontSize } from "../utils/material";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import useColors from "../utils/hooks/useColors";
import { Ionicons } from "@expo/vector-icons";
export default function Header({ back }) {
  const navigation = useNavigation();
  const { carrito, jwt } = useSelector((state) => state);
  const { colorApp } = useColors();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {back && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              style={{ width: widthPercentageToDP(6) }}
              name="left"
              size={heightPercentageToDP(2)}
              color={colores.text}
            />
          </TouchableOpacity>
        )}
        <Image
          style={{
            width: heightPercentageToDP(5),
            height: heightPercentageToDP(5),
            resizeMode: "cover",
          }}
          source={
            colorApp === "#9787BF"
              ? require("../assets/icono-morado.png")
              : require("../assets/icono-rojo.png")
          }
        />
      </View>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          width: widthPercentageToDP(18),
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Carrito")}>
          <Feather
            name="shopping-bag"
            size={heightPercentageToDP(3)}
            color={colorApp}
          />
        </TouchableOpacity>
        <View style={[styles.bulletNumber, { backgroundColor: colorApp }]}>
          <Text style={[styles.carrito]}>{carrito.length}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.getParent("RightDrawer").openDrawer()}
        >
          {jwt ? (
            <Entypo
              name="menu"
              size={heightPercentageToDP(3)}
              color={colorApp}
            />
          ) : (
            <AntDesign
              name="user"
              size={heightPercentageToDP(3)}
              color={colorApp}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(10),

    width: widthPercentageToDP(90),
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
  },
  carrito: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FontSize.small,
    color: colores.white,
  },
  bulletNumber: {
    width: widthPercentageToDP(6),
    height: widthPercentageToDP(6),
    backgroundColor: colores.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: widthPercentageToDP(1),
    top: -3,
  },
});
