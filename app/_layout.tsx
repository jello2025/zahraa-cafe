import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />

        <Stack.Screen
          name="(cafe-menu)"
          options={{ headerShown: false, title: "Menu" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
