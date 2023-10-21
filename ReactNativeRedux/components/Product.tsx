/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from './actions';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart);
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, item.name]);

  return (
    <View>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      {isAdded ? (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
