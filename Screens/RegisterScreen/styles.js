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
    paddingHorizontal: widthPercentageToDP(8),
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
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
  },
  image: {
    right: widthPercentageToDP(0),
    bottom: heightPercentageToDP(2),
    position: "absolute",
  },
  image2: {
    left: widthPercentageToDP(0),
    bottom: heightPercentageToDP(0),
    position: "absolute",
  },
  separator: {
    width: '100%',
    height: 1,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: colores.ligthGray,
  },
  viewLogin: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: heightPercentageToDP(6),
  },
  textLogin: {
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
    marginRight: 8,
  }
});
