import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Appearance,
} from 'react-native';

function AppPro(): React.JSX.Element {
  const colorScheme = Appearance.getColorScheme();
  console.log(colorScheme);
  const isDarkMode = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World ! useColorScheme {isDarkMode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
