import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
const About = (props) => {
  const { Image, name, price, categories, review, rating } = props.route.params;

  const Categories = categories.map((cat) => cat.title).join(" • ");
  const description = `${Categories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${review}+)`;

  return (
    <View>
      {ImageComp({Image})}
      {Description({ name, description })}
      <Divider style={{ borderBottomWidth: 2 }} />
    </View>
  );
};

const ImageComp = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.Image,
        }}
        style={{
          width: "100%",
          height: Dimensions.get("window").height / 3.7,
        }}
      />
    </View>
  );
};

const Description = (props) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, marginVertical: 4 }}>{props.name}</Text>
      <Text>{props.description}</Text>
    </View>
  );
};

export default About;
