import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
export default function Loading() {

  return (
    <View>
      <LottieView
        style={{
          width: 600,
          height: 400,
        }}
        source={require("../../assets/lottie/97591-loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}
