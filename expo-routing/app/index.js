import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

export default function index() {
  return (
    // I want home  page to be my first page to be load so redirect
    <Redirect href={"/home"} />
    // <View>
    //   <Text>index</Text>
    //   <Link href="/home">Go TO Home Page</Link>
    //   <Link href="/profile">Go TO Profile Page</Link>
    // </View>
  );
}

const styles = StyleSheet.create({});
