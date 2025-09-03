// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

const App = () => {
  return (
    <View style={styles.container}>
      <CounterApp />
      <ColorChangerApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;