import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const TaskInput = props => {
  const [currentTask, setCurrentTask] = useState('');

  const typeTaskHandler = input => {
    setCurrentTask(input)
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter text here"
        style={styles.textInput}
        value={currentTask}
        onChangeText={typeTaskHandler}
      />
      <Button
        title="Add"
        onPress={() => props.addTaskHandler(currentTask, setCurrentTask)}
      />
    </View>
  )
};

export default TaskInput;

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderColor: 'green',
    borderWidth: 3,
    padding: 10
  }
});