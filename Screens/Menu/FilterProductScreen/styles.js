import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { colores, FontSize } from "../../../utils/material";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  textFilter: {
    alignItems: "center",
    paddingLeft: wp(7),
    marginBottom: 20,
    flexDirection: "row",
  },
  text: {
    color: colores.neutro,
    fontSize: FontSize.medium,
    fontFamily: "Poppins_600SemiBold",
    marginRight: "10%",
  },
  titleSection: {
    paddingHorizontal: wp(7),
  },
});