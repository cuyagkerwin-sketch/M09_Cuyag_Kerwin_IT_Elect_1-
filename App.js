import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Counter + Color Changer (stacked together) */}
      <CounterApp count={count} setCount={setCount} />
      <ColorChangerApp setBgColor={setBgColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', padding: 20 }
});