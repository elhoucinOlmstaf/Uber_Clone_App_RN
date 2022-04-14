import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import UseFonts from "../hooks/UseFonts";

//hard coded data
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
const [IsReady, setIsReady] = useState(false);

const RestaurantsItems = (props) => {


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
    <>
      {props.RestaurantsData.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              marginTop: 10,
              height: 270,
              width: "100%",
            }}
          >
            {ImageComp(item )}
            {InfoComponent(item)}
          </View>
        );
      })}
    </>
  );
};
//image component

const ImageComp = (props) => {
  return (
    <>
      <Image
        style={{
          width: "95%",
          height: "75%",
          alignSelf: "center",
          margin: 9,
        }}
        source={{ uri: props.image_url }}
      />
      <TouchableOpacity
        style={{ position: "absolute", right: 15, top: 15 }}
        onPress={() => props.setISfilled(true)}
      >
        <FontAwesome5 name="heart" size={28}  />
      </TouchableOpacity>
    </>
  );
};
//info component
const InfoComponent = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
      }}
    >
      <View>
        <Text style={{ fontFamily: "Poppins-MediumItalic" }}>{props.name}</Text>
        <Text>30-45 min</Text>
      </View>
      <Text style={{ marginRight: 10 }}>{props.rating}</Text>
    </View>
  );
};
export default RestaurantsItems;
