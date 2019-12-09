import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [listOfTasks, setListOfTasks] = useState([]);


  const allTasks = listOfTasks.map(elem => {
    return (
      <View style={{margin: 10, marginLeft: 5,  width: '95%', justifyContent: 'space-around', border: 3, flexDirection: 'row', alignItems: 'center'}} key={elem}>
        <Text style={{fontSize: 20, borderColor: 'black', borderWidth: 3, paddingLeft: 10, backgroundColor: '#ccc', flex: 1}}>{elem}</Text>
        <Button style={{paddingRight: 10}} title={'delete'} onPress={deleteHandler}/>
      </View>
    )
  });

  const typeTaskHandler = input => {
    setCurrentTask(input)
  };

  const addTaskHandler = () => {
    setListOfTasks(currentTasks => {
      return [...currentTasks, currentTask];
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
      <ScrollView>
        {allTasks}
      </ScrollView>

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

