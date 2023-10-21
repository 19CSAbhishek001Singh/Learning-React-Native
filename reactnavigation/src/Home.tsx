import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home(props) {
  console.log(props.route.params);
  return (
    <View>
      <Text style={{fontSize: 100, color: '#000'}}>Home</Text>
      <Text style={{fontSize: 40, color: '#000'}}>
        Name: {props.route.params.name}
      </Text>
      <Text style={{fontSize: 40, color: '#000'}}>
        Age: {props.route.params.age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
