import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import Carrito from "../Menu/Carrito/Carrito";
import CrearOrden from "../Menu/Carrito/CrearOrden";
import PedidoConfirmado from "../Menu/Carrito/PedidoConfirmado";
import Contactanos from "../Menu/Contactanos";
import HomeScreen from "../Menu/HomeScreen/HomeScreen";
import DatosDeEnvio from "../Menu/Perfil/DatosDeEnvio";
import Favoritos from "../Menu/Perfil/Favoritos";
import PedidosPerfil from "../Menu/Perfil/PedidosPerfil";
import Perfil from "../Menu/Perfil/Perfil";
import TodosLosPedidos from "../Menu/Perfil/TodosLosPedidos";
import CategoriasCompletas from "../Menu/Producto/CategoriasCompletas";
import MarcasCompletas from "../Menu/Producto/MarcasCompletas";
import ProductoDetalle from "../Menu/Producto/ProductoDetalle";
import Productos from "../Menu/Productos";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
          cardStyle: {
            borderRadius: 50,
            drawerBackgroundColor: "transparent",
          },
        }}
      />

      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="ProductoDetalle" component={ProductoDetalle} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Carrito" component={Carrito} />
      <Stack.Screen name="DatosDeEnvio" component={DatosDeEnvio} />
      <Stack.Screen
        name="PedidoConfirmado"
        component={PedidoConfirmado}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="PedidosPerfil" component={PedidosPerfil} />
      <Stack.Screen name="Contactanos" component={Contactanos} />
      <Stack.Screen name="TodosLosPedidos" component={TodosLosPedidos} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="MarcasCompletas" component={MarcasCompletas} />
      <Stack.Screen
        name="CategoriasCompletas"
        component={CategoriasCompletas}
      />

      <Stack.Screen name="CrearOrden" component={CrearOrden} />
    </Stack.Navigator>
  );
}
