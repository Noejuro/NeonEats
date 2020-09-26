import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens'

import MealsNavigator from "./Navigation/MealsNavigator"

enableScreens();

export default function App() {
  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
