import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Home';
// import Login from './Login';

// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  // const btnAction = () => {
  //   console.log('button pressed');
  // };
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: 'skyblue',
    //       },
    //       headerTitleStyle: {
    //         fontSize: 25,
    //       },
    //       headerTintColor: 'blue',
    //     }}>
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         headerTitle: () => <Button title="Left" onPress={btnAction} />,
    //         headerRight: () => <Header />,
    //         headerStyle: {
    //           backgroundColor: 'yellow',
    //         },
    //         headerTitleStyle: {
    //           fontSize: 25,
    //         },
    //         headerTintColor: 'grey',
    //       }}
    //     />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Login" component={Login} />
    //     <Tab.Screen name="Signup" component={Signup} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 20},
          tabBarItemStyle: {width: 140},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Signup = () => {
  return (
    <View>
      <Text style={{fontSize: 40, color: 'blue'}}>SignUp</Text>
    </View>
  );
};

const Login = () => {
  return (
    <View>
      <Text style={{fontSize: 40, color: 'blue'}}>Login</Text>
    </View>
  );
};

const Other = () => {
  return (
    <View>
      <Text style={{fontSize: 40, color: 'blue'}}>Other</Text>
    </View>
  );
};

// const Header = () => {
//   return (
//     <TextInput
//       style={{
//         backgroundColor: '#FFF',
//         width: 100,
//         borderRadius: 10,
//         color: '#000',
//       }}
//     />
//   );
// };

const styles = StyleSheet.create({});
