import { menu } from "@/data/menu/menu";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageStyle,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import MenuItem from "./MenuItem";

const imgURI =
  "https://media.istockphoto.com/id/1467739359/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=tE80r7iDn7S9YwIJVuKAm5KmpJPVz5HbRDc975IlKVo=";

export default function Menu() {
  const menuList = menu.map((menuItem) => (
    <MenuItem key={menuItem.id} menuItem={menuItem} />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.headerImageContainer}>
        <Image
          contentFit="cover"
          style={styles.headerImage}
          source={{ uri: imgURI }}
        />
        <LinearGradient
          colors={["transparent", "#F9F6F0"]}
          style={styles.headerGradient}
        />
      </View>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {menuList}
      </ScrollView>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  headerImageContainer: ViewStyle;
  headerImage: ImageStyle;
  headerGradient: ViewStyle;
  menuContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "#F9F6F0",
    height: "100%",
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
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 25,
    columnGap: 15,
    padding: 15,
    paddingBottom: 50,
  },
});
