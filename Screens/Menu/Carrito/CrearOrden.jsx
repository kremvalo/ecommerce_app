import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { WebView } from "react-native-webview";

import { Text, Dimensions } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { CustomHeaderWebView } from "../../../Components/CustomWebView";
import { toastGenerate } from "../../../utils/ToastGenerate";
import { cleanCarrito } from "../../../redux/actions";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function CrearOrden({ navigation, route }) {
  const [url, setUrl] = useState("");
  const [state, setState] = useState();
  const [view, setView] = useState(false);
  const { data, jwt } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      if (state.url.includes("mercadopago")) {
        setUrl(state.url);
        setView(true);
      } else {
        setView(false);
      }
      if (state.url.includes("order-received")) {
        navigation.navigate("PedidoConfirmado");
        dispatch(cleanCarrito());
      }
    }
  }, [state]);

  return (
    <>
      {view ? (
        <WebView
          originWhitelist={["*"]}
          style={{ marginTop: height * 0.05 }}
          source={{ uri: url }}
          startInLoadingState={true}
          onNavigationStateChange={(state) => setState(state)}
        />
      ) : (
        <CustomHeaderWebView
          setState={setState}
          source={{
            uri: "https://vherona.com/finalizar-compra/",
            headers: {
              Authorization: "Bearer " + jwt.token,
            },
          }}
        />
      )}

      {console.log(state)}
    </>
  );
}
