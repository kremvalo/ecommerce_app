import { View } from "react-native";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import * as SplashScreen from 'expo-splash-screen';
import { PersistGate } from "redux-persist/integration/react";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { store, persistor } from "./src/redux/store";
import AppNavigator from "./src/navigation/AppNavigator";

SplashScreen.preventAutoHideAsync();

function App() {
  setTimeout(SplashScreen.hideAsync, 2000);

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  return (
    <>
      {!fontsLoaded ? (
        <View></View>
      ) : (
        <Provider store={store}>
          <PersistGate loading={<View />} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;
