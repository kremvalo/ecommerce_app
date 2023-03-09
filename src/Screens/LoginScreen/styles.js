import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { colores, FontSize } from "../../utils/material";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.white,
    paddingHorizontal: widthPercentageToDP(8),
  },
  box: {
    marginTop: heightPercentageToDP(4),
    justifyContent: "space-between",
  },
  sectionLogo: {
    alignItems: 'center'
  },
  textR: {
    color: colores.primary,
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
  },
  loginButton: {
    widh: '100%',
    elevation: 8,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: colores.black,
    shadowRadius: 4.65,
    shadowOpacity: 0.30,
    paddingVertical: '4%',
    backgroundColor: colores.primary,
    borderTopEndRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  textButton: {
    color: colores.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    width: "100%",
    height: 1,
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: colores.ligthGray,
  },
  image: {
    height: heightPercentageToDP(20),
    resizeMode: "contain",
  },
  image2: {
    height: heightPercentageToDP(15),
    resizeMode: "contain",
  },
  textPress: {
    color: colores.primary,
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
  },
  viewLogin: {
    alignItems: 'center',
    marginBottom: heightPercentageToDP(6),
    flexDirection: 'row',
  },
  textLogin: {
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
    marginRight: 8,
  }
});