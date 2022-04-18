import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../Components/HeaderTabs";
import Search_Bar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import RestaurantsItems from "../Components/RestaurantsItems";
import Loading from "../animations/Loading";
export default function Home() {
  const [ActiveTab, setActiveTab] = useState("Delivery");
  const KeyAPi =
    "OqCNbW87203R_q2rPPtyrI4fJ2zkIybf7iriNp9yN3v2kjWMqtgKb-lQrh28YARXvEb_R4sxJPemgS57vYgf_MaDg0oCWXi5ezgn7qt85lDgYITXHzbv1L-A5EH8X3Yx";
  const ApiUrl = "https://api.yelp.com/v3/businesses/search?location=NYC";
  const [Restaurants, setRestaurants] = useState([]);
  const [IsDataReady, setIsDataReady] = useState(false);
  const getApi = async () => {
    const response = await fetch(ApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${KeyAPi}`,
      },
    });
    await response.json().then((data) => {
      setRestaurants(
        data.businesses.filter((business) =>
          business.transactions.includes(ActiveTab.toLowerCase())
        )
      );

      setIsDataReady(true);
    });
  };
  useEffect(() => {
    getApi();
  }, [ActiveTab]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      {IsDataReady ? (
        <>
          <View style={{ backgroundColor: "#fff", padding: 15 }}>
            <HeaderTabs ActiveTab={ActiveTab} setActiveTab={setActiveTab} />
            <Search_Bar />
          </View>
          <Categories />
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            <RestaurantsItems RestaurantsData={Restaurants} />
          </ScrollView>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
}
