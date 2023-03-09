import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Text } from "react-native";
import WebView from "react-native-webview";
import { useSelector } from "react-redux";

export const CustomHeaderWebView = (props) => {
  const { setState, uri, onLoadStart, ...restProps } = props;
  const [currentURI, setURI] = useState(props.source.uri);
  const newSource = { ...props.source, uri: currentURI };
  const [id, setID] = useState(null);
  const { data, jwt } = useSelector((state) => state);
  const getCookiesJS = "ReactNativeWebView.postMessage(document.cookie)";

  return (
    <>
      <WebView
        {...restProps}
        injectedJavaScriptBeforeContentLoaded={`
    XMLHttpRequest.prototype.open = (function(open) {
      return function(method,url,async) {
        open.apply(this,arguments);
        this.setRequestHeader('Authorization', 'Bearer${jwt.token}');
       
      };
    })(XMLHttpRequest.prototype.open);
  `}
        injectedJavaScriptBeforeContentLoadedForMainFrameOnly={false}
        injectedJavaScriptForMainFrameOnly={false}
        /*    injectedJavaScript={getCookiesJS} */
        source={newSource}
        /* sharedCookiesEnabled={true} */
        javaScriptEnabled={true}
        startInLoadingState={true}
        onNavigationStateChange={(e) => setState(e)}
        onShouldStartLoadWithRequest={(request) => {
          // If we're loading the current URI, allow it to load
          if (request.url === currentURI) return true;
          // We're loading a new URL -- change state first
          setURI(request.url);
          return false;
        }}
      />
    </>
  );
};
