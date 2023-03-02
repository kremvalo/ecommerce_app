import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { colores as colors, FontSize } from "../../utils/material";

export const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    marginBottom: 20,
    backgroundColor: colors.ligthGray,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textR: {
    color: colors.primary,
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
  },
  viewLogin: {
    alignItems: 'center',
    marginBottom: hp(6),
    flexDirection: 'row',
  },
  textLogin: {
    fontSize: FontSize.small,
    fontFamily: "Poppins_400Regular",
    marginRight: 8,
  }
});