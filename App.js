import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  EndContextProvider,
  StartContextProvider,
} from "./src/context/context";
import RoootNavigator from "./src/navigations/RootNavigator";
// navigator.geolocation = require('@react-native-community/geolocation');
navigator.geolocation = require("react-native-geolocation-service");
const App = () => {
  return (
    <EndContextProvider>
      <StartContextProvider>
        <RoootNavigator />
      </StartContextProvider>
    </EndContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
