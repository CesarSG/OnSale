import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/img/background.jpg")}
        style={styles.bg}
      >
        <Image
          source={require("./assets/img/logo-red.png")}
          style={styles.logo}
        />
        <View
          style={{
            backgroundColor: "blue",
            width: "100%",
            height: 80,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            width: "100%",
            height: 80,
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  logo: {
    width: "34%",
    height: "auto",
    position: "absolute",
    top: 25,
    resizeMode: "contain",
  },
});
