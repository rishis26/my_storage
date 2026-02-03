import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import MyStampName from './src/MyStampName';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Main content area */}
      <View style={styles.content}>
        <HomeScreen />
      </View>

      {/* Footer with your name - always at bottom */}
      <View style={styles.footer}>
        <MyStampName />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});
