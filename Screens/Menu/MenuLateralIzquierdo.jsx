import { createDrawerNavigator } from "@react-navigation/drawer";
import { widthPercentageToDP } from "react-native-responsive-screen";
import MenuDerechoContenido from "../../Components/MenuDerechoContenido";
import MenuIzquierdoContenido from "../../Components/MenuIzquierdoContenido";
import CargaInicioSesion from "../CargaInicioSesion";
import ConfirmacionRegistro from "../ConfirmacionRegistro";
import ContrasenaOlvidada from "../ContrasenaOlvidada";
import IniciarSesion from "../IniciarSesion";
import InicioMenu from "../InicioMenu";
import HomeNavigator from "../navigator/HomeNavigator";
import Registro from "../Registro";
import Rol from "../Rol";
import ValidarTelefono from "../ValidarTelefono";
import Carrito from "./Carrito/Carrito";
import ConfirmacionPedido from "./Carrito/ConfirmacionPedido";
import CrearOrden from "./Carrito/CrearOrden";
import PedidoConfirmado from "./Carrito/PedidoConfirmado";
import Contactanos from "./Contactanos";
import Home from "./Home";
import DatosDeEnvio from "./Perfil/DatosDeEnvio";
import Favoritos from "./Perfil/Favoritos";
import PedidosPerfil from "./Perfil/PedidosPerfil";
import Perfil from "./Perfil/Perfil";
import TodosLosPedidos from "./Perfil/TodosLosPedidos";
import CategoriasCompletas from "./Producto/CategoriasCompletas";
import MarcasCompletas from "./Producto/MarcasCompletas";
import ProductoDetalle from "./Producto/ProductoDetalle";
import Productos from "./Productos";
const LeftDrawer = createDrawerNavigator();

export default function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      drawerContent={(props) => <MenuIzquierdoContenido {...props} />}
      screenOptions={{
        drawerType: "front",
        drawerPosition: "left",
        headerShown: false,
        drawerStyle: {
          width: widthPercentageToDP(50),
          borderRadius: 30,
        },
      }}
    >
      <LeftDrawer.Screen name="HomeNavLeft" component={HomeNavigator} />
    </LeftDrawer.Navigator>
  );
}
