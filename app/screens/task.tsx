import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalStyles } from '../css/general'
import Taskbox from '../components/taskbox'

const categories = ['Homework', 'urgent', 'long run']
const tasks = ['task 1', 'task 2', 'task 3']

const Task = () => {
  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.headerText1}>Categories</Text>
      <View style={[generalStyles.row, generalStyles.row_padding]}>
        {categories.map((cat, index) => (
          <View key={index} style={generalStyles.category_box}/>
        ))}
      </View>
      <View style={generalStyles.divider}/>
      <Text style={generalStyles.headerText1}>Task</Text>
      {tasks.map((task, index) => (
        <Taskbox key={index} title={task} due_date='01/02/2025' checkboxActive={true} />
      ))}
    </View>
  )
}

export default Task

const styles = StyleSheet.create({})