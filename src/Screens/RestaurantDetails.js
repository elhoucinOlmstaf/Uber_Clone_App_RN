import { View, Text } from "react-native";
import React, { useEffect } from "react";
import About from "../Components/About";
import MenuItem from "../Components/MenuItem";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RestaurantDetails({ navigation, route }) {
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <About Items={route.params.item} />
      <MenuItem />
    </SafeAreaView>
  );
}
