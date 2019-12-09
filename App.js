import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState([]);


  const allTasks = listOfTasks.map(elem => {
    return (
      <View style={{margin: 10, width: '80%', justifyContent: 'space-around', borderColor: 'red', border: 3}} key={elem}>
        <Text style={{fontSize: 24, borderColor: 'brown', borderWidth: 3, paddingLeft: 10}}>{elem}</Text>
      </View>
    )
  });

  const typeTaskHandler = input => {
    setCurrentTask(input)
  };

  const addTaskHandler = () => {
    setListOfTasks(currentTasks => [...currentTasks, currentTask]);
    setCurrentTask('')
  };

  return (
    <View style={{padding: 50}}>
      <Text style={styles.goals}>GOALS</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <TextInput
          placeholder="Enter text here"
          style={{ width: '80%', borderColor: 'green', borderWidth: 3, padding: 10}}
          value={currentTask}
          onChangeText={typeTaskHandler}
        />

        <Button
          title="Add"
          onPress={addTaskHandler}
        />
      </View>
      <View>
        {allTasks}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  goals: {
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    marginBottom: 10
  }
});

