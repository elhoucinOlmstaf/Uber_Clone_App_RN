import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Orders from "../Screens/Orders";
import Account from "../Screens/Account";
import RestaurantDetails from "../Screens/RestaurantDetails";
import { TouchableOpacity } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={Search} />
    </Stack.Navigator>
  );
};
const OrdersScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrdersScreen" component={Orders} />
    </Stack.Navigator>
  );
};
const AccountScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={Account} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="RootApp"
        screenOptions={{
          tabBarInactiveTintColor: "#000",
          tabBarActiveTintColor: "tomato",
          tabBarStyle: {
            position: "absolute",
            borderTopColor: "rgba(0, 0, 0, .2)",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "tomato" : "black"}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: "bold",
            },
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <FontAwesome5
                  name="search"
                  size={24}
                  color={focused ? "tomato" : "black"}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: "bold",
            },
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: "bold",
            },
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="order-bool-descending-variant"
                size={24}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
