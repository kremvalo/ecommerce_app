import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";
import HeaderLogo from "./components/HeaderLogo";
import CardRegister from "./components/CardRegister";

import { role } from "../../utils/const";

function RegisterTypeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderLogo onPress={() => navigation.goBack()} />
        <CardRegister
          isCompany
          onPress={() =>
            navigation.navigate("RegisterScreen", { filter: role.CLIENT })
          }
        />
        <CardRegister
          onPress={() =>
            navigation.navigate("RegisterScreen", { filter: role.BUSINESS })
          }
        />
        <View style={styles.separator} />
        <View style={styles.viewLogin}>
          <Text style={styles.textLogin}>¿Ya tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.textR}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterTypeScreen;
