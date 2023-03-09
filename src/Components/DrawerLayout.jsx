import React from "react";
import { View } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

function DrawerLayout({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={{ width: "100%", height: "100%" }}>
          <DrawerItem label="Home" onPress={() => {}} />
          <DrawerItem label="Shopping" onPress={() => {}} />
          <DrawerItem label="Favorite" onPress={() => {}} />
          <DrawerItem label="Profile" onPress={() => {}} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerLayout;
