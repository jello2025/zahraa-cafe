import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const profileImageURI =
  "https://www.shutterstock.com/image-vector/meme-flork-pups-morning-coffee-600nw-2308864881.jpg";

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: profileImageURI,
        }}
        contentFit="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "50%",
  },
});

export default Index;
