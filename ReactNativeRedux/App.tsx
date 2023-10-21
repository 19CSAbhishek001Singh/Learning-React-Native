import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Product from './components/Product';

type Props = {};

const App = (props: Props) => {
  const products = [
    {
      name: 'apple',
      color: 'white',
      price: 323233,
    },
    {
      name: 'samsung',
      color: 'black',
      price: 32233,
    },
    {
      name: 'nokia',
      color: 'red',
      price: 3233,
    },
  ];
  return (
    <View>
      <Header />
      {products.map(item => (
        <Product key={item.price} item={item} />
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
