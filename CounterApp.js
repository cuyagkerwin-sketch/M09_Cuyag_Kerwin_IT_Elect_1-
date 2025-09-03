// CounterApp.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCounter(counter + 1)} />
        <Button title="Decrement" onPress={() => setCounter(counter - 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default CounterApp;