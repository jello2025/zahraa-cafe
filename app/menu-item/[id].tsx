import { menuList } from "@/features/cafe-menu/dummy-data/menu";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MenuItem() {
  const { id } = useLocalSearchParams();
  const numericId = Number(id);

  if (!id) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.notFoundText}>No Item Found</Text>
      </View>
    );
  }

  const menu = menuList.find((item) => item.id === numericId);

  return (
    <View style={styles.container}>
      <Stack.Screen name={"menu-item/[id]"} options={{ title: menu?.name }} />
      <View style={styles.headerImageContainer}>
        <Image
          contentFit="cover"
          style={styles.headerImage}
          source={{ uri: menu?.image }}
        />
        <LinearGradient
          colors={["transparent", "#F9F6F0"]}
          style={styles.headerGradient}
        />
      </View>

      <View style={styles.menuDetails}>
        <Text style={styles.menuTitle}>{menu?.name}</Text>
        <Text style={styles.menuDescription}>{menu?.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F6F0",
    height: "100%",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "#4e3f39",
  },
  headerImageContainer: {
    position: "relative",
    height: 300,
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
  },
  menuDetails: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 28,
    color: "#4e3f39",
  },
  menuDescription: {
    fontSize: 16,
    color: "#4e3f39",
  },
});
