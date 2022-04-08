import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../Components/HeaderTabs";
import Search_Bar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantsItems from "../Components/RestaurantsItems";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <Search_Bar />
      </View>
      <Categories />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <RestaurantsItems />
      </ScrollView>
    </SafeAreaView>
  );
}
