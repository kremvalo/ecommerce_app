import { ToastAndroid, Platform } from "react-native";
import Toast from "react-native-root-toast";
export function toastGenerate(string) {
  console.log(string);
  if (Platform.OS !== "ios") {
    ToastAndroid.showWithGravityAndOffset(
      string,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      5,
      5
    );
  } else {
    let toast = Toast.show(string, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    Toast.show(string, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }
}
