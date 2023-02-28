import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuDerechoContenido from "../../Components/MenuDerechoContenido";
import CargaInicioSesion from "../CargaInicioSesion";
import ConfirmacionRegistro from "../ConfirmacionRegistro";
import ContrasenaOlvidada from "../ContrasenaOlvidada";
import IniciarSesion from "../IniciarSesion";
import InicioMenu from "../InicioMenu";
import Rol from "../Rol";
import ValidarTelefono from "../ValidarTelefono";
import LeftDrawerScreen from "./MenuLateralIzquierdo";

const RightDrawer = createDrawerNavigator();

export default function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <MenuDerechoContenido {...props} />}
      screenOptions={{
        drawerType: "front",
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          borderRadius: 50,
        },
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}
