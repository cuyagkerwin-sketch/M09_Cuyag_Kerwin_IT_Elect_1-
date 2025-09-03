// ColorChangerApp.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('Orange');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="white" onPress={() => setBackgroundColor('white')} />
      <Button title="Light Blue" onPress={() => setBackgroundColor('lightblue')} />
      <Button title="lightgreen" onPress={() => setBackgroundColor('lightgreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20, 
    padding: 30,
    justifyContent: 'center',
  },
});

export default ColorChangerApp;
