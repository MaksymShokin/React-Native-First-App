import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import TaskInput from './components/TaskInput';
import TaskText from './components/TaskText';

export default function App() {
  const [listOfTasks, setListOfTasks] = useState([]);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);


  const addTaskHandler = (currentTask, setCurrentTask) => {
    setListOfTasks(currentTasks => {
      return [...currentTasks, {key: Math.random().toString(), id:Math.random().toString(), value: currentTask}];
    });
    setCurrentTask('');
    openAddTaskModal()
  };

  const deleteTaskHandler = taskId => {
    setListOfTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId)
    })
  };

  const openAddTaskModal = () => {
    setAddTaskModalOpen(currentModalState=> !currentModalState)
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.goals}>GOALS</Text>
      <Button title='Add new Goal!' onPress={openAddTaskModal}/>
      <TaskInput addTaskHandler={addTaskHandler} visible={addTaskModalOpen} openModal={openAddTaskModal}/>
      <FlatList
        data={listOfTasks}
        renderItem={listItem => <TaskText deleteHandler={deleteTaskHandler} title={listItem.item.value} id={listItem.item.id}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  goals: {
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    marginBottom: 10
  }
});

