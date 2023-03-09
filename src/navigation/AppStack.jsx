import React from "react";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions, Text, StyleSheet } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ShoppingScreen,
  FavoriteScreen,
  ProfileScreen,
  LoginScreen,
  RegisterTypeScreen,
  RegisterScreen,
  HomeScreen,
  ContrasenaOlvidada,
  FilterProductScreen,
} from "../Screens";

import { colores } from "../utils/material";
import DrawerLayout from "../Components/DrawerLayout";
import ProductoDetalle from "../Screens/Menu/Producto/ProductoDetalle";

import Splash from "../Screens/Splash";

// Stacks
const Stack = createStackNavigator();

// Tabs
const Tab = createBottomTabNavigator();

// Drawer
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductoDetalle" component={ProductoDetalle} />
      <Stack.Screen
        name="FilterProductScreen"
        component={FilterProductScreen}
      />
    </Stack.Navigator>
  );
}

function ShoppingStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="ShoppingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
    </Stack.Navigator>
  );
}

function FavoriteStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="FavoriteScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ContrasenaOlvidada" component={ContrasenaOlvidada} />
      <Stack.Screen name="RegisterTypeScreen" component={RegisterTypeScreen} />
    </Stack.Navigator>
  );
}

function MainNavigation() {
  // Render icon Home
  const tabIconHome = ({ focused }) => (
    <>
      <Feather name="home" size={24} color={colores.primary} />
      {focused && <Text style={styles.text}>Home</Text>}
    </>
  );

  // Render icon Shopping
  const tabIconShopping = ({ focused }) => (
    <>
      <Feather name="shopping-cart" size={24} color={colores.primary} />
      {focused && <Text style={styles.text}>Tienda</Text>}
    </>
  );

  // Render icon Favorite
  const tabIconFavorite = ({ focused }) => (
    <>
      <Feather name="heart" size={24} color={colores.primary} />
      {focused && <Text style={styles.text}>Deseos</Text>}
    </>
  );

  // Render icon Profile
  const tabIconProfile = ({ focused }) => (
    <>
      <Feather name="user" size={24} color={colores.primary} />
      {focused && <Text style={styles.text}>Perfil</Text>}
    </>
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({ route }) => ({
          tabBarIcon: (focused) => tabIconHome(focused),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            if (routeName === "ProductoDetalle") {
              return { display: "none" };
            }
            return styles.bottom;
          })(route),
        })}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingStackScreen}
        options={() => ({
          tabBarIcon: (focused) => tabIconShopping(focused),
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackScreen}
        options={() => ({
          tabBarIcon: (focused) => tabIconFavorite(focused),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={() => ({
          tabBarIcon: (focused) => tabIconProfile(focused),
          tabBarStyle: { display: "none" },
        })}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigation() {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerType={width >= 768 ? "permanent" : "front"}
      drawerContent={(props) => <DrawerLayout {...props} />}
    >
      <Drawer.Screen name="MainNavigation" component={MainNavigation} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    size: 12,
    color: colores.primary,
  },
  bottom: {
    left: 20,
    right: 20,
    bottom: 25,
    height: 57,
    position: "absolute",
    elevation: 5,
    shadowColor: colores.black,
    borderRadius: 15,
    backgroundColor: colores.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
  },
});

export default DrawerNavigation;
