import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import { createStore } from "redux";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favoritos", "carrito"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
