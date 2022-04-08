import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Search_Bar() {
  return (
    <View style={{ flexDirection: "row", marginTop: 15 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <Ionicons
            name="location"
            size={28}
            color="black"
            style={{ marginLeft: 8 }}
          />
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingHorizontal: 12,
              marginRight: 5,
              borderRadius: 40,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={14}
              color="black"
              style={{ marginRight: 4 }}
            />
            <Text>search</Text>
          </View>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({});
