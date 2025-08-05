import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="menu"
        options={{
          title: "Our delicious menu☕️",
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome☕️🧌",
        }}
      />
    </Stack>
  );
}
