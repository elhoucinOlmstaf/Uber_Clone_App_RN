import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
const Foods = [
  {
    name: "Tagine",
    image_url:
      "https://www.thespruceeats.com/thmb/olofX8vc7tVzGOSn4XCYAspSzHM=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/berber-tagine-1-2718-x-1800-57c500575f9b5855e537715c.jpg",
    price: "$17.50",
    description:
      "the famous slow-cooked Moroccan stew that takes its name from the traditional ... ",
  },
  {
    name: "Chicken ",
    image_url:
      "https://www.thespruceeats.com/thmb/RX6WpePT_WB2rFoYFzzyfgsV2kQ=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Roasted-Chicken-3264-x-2448-56a644a65f9b58b7d0e0c110.jpg",
    price: "$16.40",
    description:
      "This classic, versatile dish is also one of Morocco's most famous and ubiquitous. ",
  },
  {
    name: "Lamb",
    description:
      "The meat is cooked until buttery tender with saffron, ginger, and onions, ",
    image_url:
      "https://www.thespruceeats.com/thmb/L_r2Yt-WMsZQy5VQgQGedimZKHc=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tagine-Of-Beef-and-Prunes-2592-x-1944-56a6454c3df78cf7728c305c.jpg",
    price: "$14.89",
  },
  {
    name: "Kefta Meatball",
    description:
      "Moroccans like to heartily season their ground beef or lamb (kefta) with cumin, paprika, and herbs",
    image_url:
      "https://www.thespruceeats.com/thmb/Ph-g7zVDU-M2EpGogiCF1wWPqpI=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Kefta_Mkaouara-2_J_Gilman-56a644623df78cf7728c2de3.jpg",
    price: "$22.33",
  },
  {
    name: "Harira",
    description:
      "harira is a tomato-based soup laden with lentils and chickpeas",
    image_url:
      "https://www.thespruceeats.com/thmb/4NZHmgq_2Fi3eBqVsaT6x8qEEc4=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-moroccan-harira-soup-2394920.Hero-5b6b411546e0fb0050483664.jpg",
    price: "$22.22",
  },
  {
    name: "Sardines",
    description:
      "In Morocco sardines can be found in abundance along the long coastline, making these flavorful little fish extremely affordable",
    image_url:
      "https://www.thespruceeats.com/thmb/dFdUgDSbyVDCJE-kdiWlNEp_4I4=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/moroccan-baked-whole-sardines-recipe-2394638-hero-01-5c7da67146e0fb0001d83dc2.jpg",
    price: "$23.56",
  },
  {
    name: "Rfissa",
    description:
      "In Morocco, it takes the form of rfissa, a spectacular presentation of stewed chicken and lentils fragrantly",
    image_url:
      "https://www.thespruceeats.com/thmb/CaraHKNxq761dm8KxmSnn4EKC-U=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Rfissa-3264-x-2176-56a644a75f9b58b7d0e0c113.jpg",
    price: "$27.88",
  },
];
export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((food, index) => {
        return (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              <InfoComp
                food={food}
                description={food.description}
                name={food.name}
                price={food.price}
              />
              <ImageComp image={food.image_url} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const ImageComp = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.image }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
    </View>
  );
};
const InfoComp = (props) => {
  return (
    <View style={{ width: Dimensions.get("window").width / 1.5 }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          flexWrap: "wrap",
        }}
      >
        {props.name}
      </Text>
      <Text style={{ fontSize: 15 }}>{props.description}</Text>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>{props.price}</Text>
    </View>
  );
};
