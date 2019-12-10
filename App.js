import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState([]);

  const typeTaskHandler = input => {
    setCurrentTask(input)
  };

  const addTaskHandler = () => {
    setListOfTasks(currentTasks => {
      return [...currentTasks, { id: Math.random().toString(), value:currentTask }];
    });
    setCurrentTask('')
  };

  const deleteHandler = () => {

  };

  return (
    <View  style={{padding: 50}}>
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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listOfTasks}
        renderItem={listItem => (
            <View style={styles.listOfTasksView} >
              <Text style={styles.listOfTasksText}>{listItem.item.value}</Text>
              <Button style={{paddingRight: 10}} title={'delete'} onPress={deleteHandler}/>
            </View>
          )
        }
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
  },
  listOfTasksView: {
    margin: 10,
    marginLeft: 5,
    width: '95%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listOfTasksText: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 3,
    paddingLeft: 10,
    backgroundColor: '#ccc',
    flex: 1
  }
});

