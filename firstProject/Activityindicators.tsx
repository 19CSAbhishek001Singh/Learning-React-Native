import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Activityindicators() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      <ActivityIndicator size={50} color="red" animating={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    margin: 20,
  },
});
