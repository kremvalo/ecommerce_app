import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

import { colores, FontSize } from "../../utils/material";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.background,
    paddingHorizontal: widthPercentageToDP(7),
  },
  box: {
    alignItems: 'center'
  },
  imageLogo: {
    width: widthPercentageToDP(30),
    height: widthPercentageToDP(30),
    resizeMode: "contain",
  },
  mainWrapper: {
    width: '100%',
  },
  textR: {
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins_400Regular",
    fontSize: FontSize.medium,
    color: colores.primary,
  },
  image: {
    bottom: heightPercentageToDP(2),
    right: widthPercentageToDP(0),
    position: "absolute",
  },
  image2: {
    bottom: heightPercentageToDP(0),
    left: widthPercentageToDP(0),
    position: "absolute",
  },
});
