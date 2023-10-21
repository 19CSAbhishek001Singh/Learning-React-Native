import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Flatlists from './Flatlists';
// import Sectionlist from './Sectionlist';
import UseEffects from './UseEffects';
import Activityindicators from './Activityindicators';
import Modals from './Modals';

const Separator = () => <View style={styles.separator} />;
let age = 3;
let email = 'abhishek';
function fruit() {
  return 'apple';
}

export default function App() {
  // const [data, setData] = useState<number>(100);
  // const [name, setName] = useState('');
  // let name = 'abhishek';
  // let data = 100;
  // const fruits = (val: string) => {
  // setData(prev => prev + 5);
  // data = 200;
  // console.warn(data);
  // console.warn('function called');
  // console.warn(val);
  // };
  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'skyblue',
        },
      ]}>
      {/* <Text style={styles.text}>
        Hello React Native {age} {email} {fruit()} {data}
      </Text>
      <Separator />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
        color={'red'}
        disabled={false}
      />

      <Separator />

      <Button
        title="Fruits button"
        onPress={() => fruits('hello')}
        color={'blue'}
        disabled={false}
      />

      <User name={name} age={23} />

      <Button title="Update props" onPress={() => setName('Singh')} />

      <Text>Handle text Input</Text>
      <Text>Your name is : {name}</Text>

      <TextInput
        style={{
          fontSize: 24,
          borderWidth: 4,
          borderColor: 'red',
        }}
        placeholder="enter you name"
        onChangeText={text => setName(text)}
        value={name}
        secureTextEntry={true} //password like
      />
      <Button title="Clear input value" onPress={() => setName('')} />
      {/* <Flatlists /> */}
      {/* <Sectionlist /> */}
      {/* <UseEffects /> */}
      {/* <Activityindicators /> */}
      <Modals />
    </View>
  );
}

const User = (props: any) => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>{props.name}</Text>
      <Text style={{fontSize: 30, color: 'red'}}>{props.age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 41,
    fontWeight: 'bold',
    color: 'skyblue',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
