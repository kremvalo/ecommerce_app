import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { colores, FontSize } from "../../utils/material";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(8),
  },
  box: {
    flex: 1,
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    justifyContent: "space-between",
  },
  textR: {
    color: colores.white,
    fontSize: FontSize.medium,
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
  },
  image: {
    height: heightPercentageToDP(20),
    resizeMode: "contain",
  },
  image2: {
    height: heightPercentageToDP(15),
    resizeMode: "contain",
  },
});