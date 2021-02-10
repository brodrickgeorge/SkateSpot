import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewimageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.green,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.red,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewimageScreen;
