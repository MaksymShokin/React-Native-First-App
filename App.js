import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [mainText, setMainText] = useState('Default text')
  return (
    <View style={styles.container}>
      <Text>{mainText}</Text>
      <Button title="Change Text" onPress={() => setMainText("puzaka Text")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
