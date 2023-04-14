import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import LoadURL from "./LoadUrl";

// const url = "http://localhost:8910/";
const url = "https://web.mosque.icu";

export default function App() {
  return (
    <View style={styles.container}>
      <LoadURL name="Mosque.icu Admin" eturl={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
