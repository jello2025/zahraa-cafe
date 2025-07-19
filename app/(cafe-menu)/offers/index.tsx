import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I&apos;m pretty sure you will get something special 🦦
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#3C3431",
    width: 250,
  },
});

export default Index;
