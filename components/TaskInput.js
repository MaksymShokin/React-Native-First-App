import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const TaskInput = props => {
  const [currentTask, setCurrentTask] = useState('');

  const typeTaskHandler = input => {
    setCurrentTask(input)
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TextInput
          placeholder="Enter text here"
          style={styles.textInput}
          value={currentTask}
          onChangeText={typeTaskHandler}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => props.addTaskHandler(currentTask, setCurrentTask)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color='red'
              onPress={props.openModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default TaskInput;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%',
  },
  textInput: {
    width: '80%',
    borderColor: 'green',
    borderWidth: 3,
    padding: 10,
    marginBottom: 10
  }
});