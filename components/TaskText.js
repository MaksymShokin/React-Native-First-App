import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const TaskText = props => {
  return (
    <TouchableOpacity onPress={() => props.deleteHandler(props.id)}>
      <View style={styles.listOfTasksView}>
        <Text style={styles.listOfTasksText}>{props.title}</Text>
        <Button style={{paddingRight: 10}} title={'delete'} onPress={() => props.deleteHandler(props.id)}/>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
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

export default TaskText;
