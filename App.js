import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [mainText, setMainText] = useState('Default text');
  return (
    <View style={{ padding: 100 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
            placeholder="Enter text here"
            style={{ width: '80%', borderColor: 'orange', borderWidth: 3 }}
        />
        <Button title="Add" />
      </View>
    </View>
  );
}

