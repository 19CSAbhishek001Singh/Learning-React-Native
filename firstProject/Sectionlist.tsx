import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Sectionlist() {
  const user = [
    {
      id: 1,
      name: 'abhishek',
      data: ['js,react,node'],
    },
    {
      id: 2,
      name: 'singh',
      data: ['python,php,html'],
    },
  ];
  return (
    <View>
      <Text>Sectionlist</Text>
      <SectionList
        sections={user}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 30}}>{name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
