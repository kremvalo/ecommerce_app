import axios from "axios";
import { URL_API } from "@env";

import { Platform } from "react-native";

export function currencyFormat(num) {
  let aux = parseInt(num);

  return "$" + aux.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
