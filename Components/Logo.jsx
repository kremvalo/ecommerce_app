import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function Logo({ src }) {
  const oplogo = useSharedValue(0);

  const logostyles = useAnimatedStyle(() => {
    return {
      opacity: oplogo.value,
    };
  });

  useFocusEffect(
    useCallback(() => {
      oplogo.value = withTiming(1, { duration: 2000 }, (finished) => {
        if (finished) {
          /*   oplogo.value = withTiming(0, { duration: 2000 }); */
        }
      });
    }, [])
  );
  return (
    <Animated.Image
      style={[
        {
          width: widthPercentageToDP(60),
          height: widthPercentageToDP(60),
          resizeMode: "contain",
        },
        logostyles,
      ]}
      source={src}
    />
  );
}

const styles = StyleSheet.create({});
