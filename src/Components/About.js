import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
const About = (props) => {
 
  return (
    <View>
      {ImageComp()}
      {Description()}
      <Divider style={{ borderBottomWidth: 2 }} />
    </View>
  );
};

const ImageComp = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
        }}
        style={{
          width: "100%",
          height: Dimensions.get("window").height / 3.7,
        }}
      />
    </View>
  );
};

const Description = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, marginVertical: 4 }}>Restaurant Name</Text>
      <Text>
        Hello Every One This is The description Of The Meals That You have
        Selected
      </Text>
    </View>
  );
};

const ItemsComp = () => {
  return (
    <View>
      <Text>Items</Text>
    </View>
  );
};

export default About;
