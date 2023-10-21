import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function UseEffects() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // console.warn('hello');
  //   return () => {
  //     console.warn('unmounted the component');
  //   };
  // }, []);
  return (
    <View>
      {/* e<Text>UseEffect {count}</Text>
      <Button title="Update Count" onPress={() => setCount(prev => prev + 1)} />
      <Text>{count === 1 ? 'hello' : null}</Txt> */}

      {/* buttons with extra styling */}
      <TouchableHighlight
        activeOpacity={0.6}
        // underlayColor="red"
        onPress={() => Alert.alert('Pressed!')}>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>

      {/* radio buttons */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    backgroundColor: '#bbb',
    fontSize: 24,
    textAlign: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 50,
    shadowColor: 'red',
    elevation: 10,
    width: 300,
    height: 70,
  },
});
