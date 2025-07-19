import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F9F6F0",
        tabBarStyle: {
          backgroundColor: "#3c3431",
        },
      }}
    >
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="coffee" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="offers/index"
        options={{
          title: "Offers",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="offer" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
