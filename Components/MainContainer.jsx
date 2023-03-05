import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { StatusBar, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { colores as colors } from "../utils/material";

const MainContainer = ({ hasHeader, ph = 0, mh = 0, children }) => (
  <>
    <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      {hasHeader}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: widthPercentageToDP(mh),
          paddingHorizontal: widthPercentageToDP(ph),
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default MainContainer;
