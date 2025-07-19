import { Drawer } from "expo-router/drawer";
import React from "react";

const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor: "#3C3431",
        drawerActiveTintColor: "#F9F6F0",
        headerTintColor: "#3C3431",
      }}
    >
      <Drawer.Screen name="profile/index" options={{ title: "Profile" }} />
    </Drawer>
  );
};

export default _layout;
