import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import LoadURL from "./LoadUrl";

export default function App() {
  return (
    <View style={styles.container}>
      <LoadURL name="Mosque.icu Admin" eturl="https://web.mosque.icu/login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
