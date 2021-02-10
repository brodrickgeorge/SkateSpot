import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "117%",
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#BCC33B",
  },
  logo: {
    width: 600,
    height: 400,
    position: "absolute",
    top: 30,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#CE4331",
  },
});

export default WelcomeScreen;
