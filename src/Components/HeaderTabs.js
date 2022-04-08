import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [ActiveTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <Header_Buttons
        title="Delivery"
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
      />
      <Header_Buttons
        title="Pickup"
        ActiveTab={ActiveTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

//Header Buttons
const Header_Buttons = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.setActiveTab(props.title)}
        style={{
          backgroundColor: props.ActiveTab === props.title ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 18,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: props.ActiveTab === props.title ? "white" : "black",
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
