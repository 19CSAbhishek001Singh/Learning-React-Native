import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
      <Pressable onPress={() => router.replace("/")}>
        <Text>Go to Main Page</Text>
      </Pressable>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
