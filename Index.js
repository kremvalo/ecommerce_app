import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import CargaInicioSesion from "./Screens/CargaInicioSesion";
import ConfirmacionRegistro from "./Screens/ConfirmacionRegistro";
import ContrasenaOlvidada from "./Screens/ContrasenaOlvidada";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import InicioMenu from "./Screens/InicioMenu";
import Carrito from "./Screens/Menu/Carrito/Carrito";
import CrearOrden from "./Screens/Menu/Carrito/CrearOrden";
import PedidoConfirmado from "./Screens/Menu/Carrito/PedidoConfirmado";
import Contactanos from "./Screens/Menu/Contactanos";

import RightDrawerScreen from "./Screens/Menu/MenuLateralDerecho";
import DatosDeEnvio from "./Screens/Menu/Perfil/DatosDeEnvio";
import Favoritos from "./Screens/Menu/Perfil/Favoritos";
import PedidosPerfil from "./Screens/Menu/Perfil/PedidosPerfil";
import Perfil from "./Screens/Menu/Perfil/Perfil";
import TodosLosPedidos from "./Screens/Menu/Perfil/TodosLosPedidos";
import MarcasCompletas from "./Screens/Menu/Producto/MarcasCompletas";
import ProductoDetalle from "./Screens/Menu/Producto/ProductoDetalle";
import Productos from "./Screens/Menu/Productos";
import Rol from "./Screens/Rol";
import Splash from "./Screens/Splash";
import ValidarTelefono from "./Screens/ValidarTelefono";

import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import RegisterTypeScreen from './Screens/RegisterTypeScreen/RegisterTypeScreen';
import PurchaseStatusScreen from "./Screens/PurchaseStatusScreen/PurchaseStatusScreen";
import VerifyPurchaseScreen from "./Screens/VerifyPurchaseScreen/VerifyPurchaseScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Rol" component={Rol} />
        <Stack.Screen name="InicioMenu" component={InicioMenu} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RegisterTypeScreen" component={RegisterTypeScreen} />
        <Stack.Screen name="PurchaseStatusScreen" component={PurchaseStatusScreen} />
        <Stack.Screen name="VerifyPurchaseScreen" component={VerifyPurchaseScreen} />
        <Stack.Screen
          name="ConfirmacionRegistro"
          component={ConfirmacionRegistro}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ContrasenaOlvidada"
          component={ContrasenaOlvidada}
        />

        <Stack.Screen name="ValidarTelefono" component={ValidarTelefono} />
        <Stack.Screen name="CargaInicioSesion" component={CargaInicioSesion} />
        
        <Stack.Screen
          name="HomeNav"
          component={RightDrawerScreen}
          options={{
            gestureEnabled: false,
            cardStyle: {
              borderRadius: 50,
              drawerBackgroundColor: "transparent",
            },
          }}
        />
        {/*  <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="ProductoDetalle" component={ProductoDetalle} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="DatosDeEnvio" component={DatosDeEnvio} />
        <Stack.Screen name="PedidoConfirmado" component={PedidoConfirmado} />
        <Stack.Screen name="PedidosPerfil" component={PedidosPerfil} />
        <Stack.Screen name="Contactanos" component={Contactanos} />
        <Stack.Screen name="TodosLosPedidos" component={TodosLosPedidos} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
        <Stack.Screen name="MarcasCompletas" component={MarcasCompletas} />
        <Stack.Screen name="CrearOrden" component={CrearOrden} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
