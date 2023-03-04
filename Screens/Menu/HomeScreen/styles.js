import { StyleSheet } from 'react-native';
import { colores, FontSize } from "../../../utils/material";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colores.background,
    alignItems: "center",
    flex: 1,
  },
  box: {
    alignItems: "center",
  },
  textT: {
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    color: colores.neutro,
    fontSize: FontSize.medium,
  },
  textN: {
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    color: colores.neutro,
    fontSize: FontSize.small,
  },
  participantView: {
    borderBottomColor: "black",
    width: "100%",
    borderBottomWidth: 1,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fffbeb",
  },
  listView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingBottom: 30,
  },
});