import { View, Text, Image } from "react-native";
import React from "react";
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

const RestaurantsItems = (props) => {
  return (
    <>
      {localRestaurants.map((item, index) => {
        return (
          <View
            key={index}
            style={{ height: 250, backgroundColor: "green", marginTop: 10 }}
          >
         
            {ImageComp(item)}
          </View>
        );
      })}
    </>
  );
};
//image component
const ImageComp = (props) => {
  console.log(props.image_url);
  return (
    <Image
      style={{ width: "90%", height: "90%" }}
      source={{ uri: props.image_url }}
    />
  );
};
export default RestaurantsItems;
