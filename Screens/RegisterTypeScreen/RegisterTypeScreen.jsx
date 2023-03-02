import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import HeaderLogo from "./components/HeaderLogo";
import CardRegister from "./components/CardRegister";

function RegisterTypeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ paddingHorizontal: wp(7) }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderLogo onPress={() => navigation.goBack()} />
        <CardRegister
          onPress={() =>
            navigation.navigate("RegisterScreen", { filter: "cliente" })
          }
        />
        <CardRegister
          onPress={() =>
            navigation.navigate("RegisterScreen", { filter: "negocio" })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterTypeScreen;
