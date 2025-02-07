import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { taskboxStyles } from '../css/taskbox'
import { generalStyles } from '../css/general'


interface TaskType {
    title : string,
    due_date : string,
    checkboxActive : boolean,
}

const Taskbox = (task : TaskType) => {
  return (
    <View style={taskboxStyles.box}>
        <View style={generalStyles.text_row}>
            <Text>{task.title}</Text>
            <Text>{task.due_date}</Text>
        </View>
    </View>
  )
}

export default Taskbox

const styles = StyleSheet.create({})