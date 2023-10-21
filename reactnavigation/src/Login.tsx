import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function Login(props) {
  const [name, setName] = useState('');
  const age = 29;
  return (
    <View>
      <Text style={{fontSize: 100, color: '#000'}}>Login</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: '#000',
          borderWidth: 2,
          margin: 10,
          backgroundColor: 'red',
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter name"
      />
      <Button
        title="Go to Home screen"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View> 
  );
}

const styles = StyleSheet.create({});
