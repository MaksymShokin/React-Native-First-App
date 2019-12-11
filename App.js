import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import TaskInput from "./components/TaskInput";
import TaskText from "./components/TaskText";

export default function App() {

  const [listOfTasks, setListOfTasks] = useState([]);


  const addTaskHandler = (currentTask, setCurrentTask) => {
    setListOfTasks(currentTasks => {
      return [...currentTasks, {key: Math.random().toString(), value: currentTask}];
    });
    setCurrentTask('')
  };

  const deleteHandler = () => {
    console.log('333')
  };

  return (
    <View style={{padding: 50}}>
      <Text style={styles.goals}>GOALS</Text>
      <TaskInput addTaskHandler={addTaskHandler}/>
      <FlatList
        data={listOfTasks}
        renderItem={listItem => <TaskText deleteHandler={deleteHandler} title={listItem.item.value}/>}
      />
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

