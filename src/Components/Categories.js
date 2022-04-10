import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import UseFonts from "../hooks/UseFonts";
import AppLoading from "expo-app-loading/build/AppLoading";

// hard coded item data
const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];
export default function Categories() {
  const [IsReady, setIsReady] = useState(false);
  const LoadFonts = async () => {
    await UseFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.listContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ margin: 10 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
            <Text style={{ fontFamily: "Roboto-MediumItalic" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
  },
});
