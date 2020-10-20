// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Text>With this patch-package fix, we can load <b>expo-notifications</b>: {typeof Notifications}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
