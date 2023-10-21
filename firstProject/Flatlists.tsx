import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';

export default function Flatlists() {
  const users = [
    {
      id: 1,
      name: 'abhishek',
    },
    {
      id: 2,
      name: 'singh',
    },
    {
      id: 3,
      name: 'abhi',
    },
    {
      id: 4,
      name: 'ak',
    },
    {
      id: 5,
      name: 'abhishek',
    },
    {
      id: 6,
      name: 'singh',
    },
    {
      id: 7,
      name: 'abhi',
    },
    {
      id: 8,
      name: 'ak',
    },
  ];
  return (
    <View>
      {/* <Text style={{fontSize: 30}}>FlatList</Text> */}
      {/* auto scroll is here */}

      <FlatList
        data={users}
        // renderItem={({item}) => <Text style={{fontSize: 26}}>{item.name}</Text>}
        // custom component inside flatlist
        renderItem={({item}) => <UserData item={item} />}
        // keyExtractor={item => item.id}
      />

      {/* custom list using map need to use scroll view */}

      <ScrollView>
        <Text>Custom List using map</Text>
        {users.map(item => (
          <Text key={item.id} style={{fontSize: 26}}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const UserData = (props: {item: any}) => {
  const item = props.item;
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
