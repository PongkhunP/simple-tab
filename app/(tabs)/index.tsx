import { Link } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { generalStyles } from '../css/general';
import Taskbox from '../components/taskbox';

export default function HomeScreen() {
  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.headerText1}>Incoming</Text>
      <Taskbox title='Task 1' due_date='01/02/2025' checkboxActive={false} />
      <View style={generalStyles.divider} />
      <View style={generalStyles.box}>
        <View style={generalStyles.text_row}>
          <Text style={generalStyles.headerText2}>Task</Text>
          <Text style={generalStyles.headerText2}>50</Text>
        </View>
      </View>
      <View style={generalStyles.box}>
        <View style={generalStyles.text_row}>
          <Text style={generalStyles.headerText2}>Note</Text>
          <Text style={generalStyles.headerText2}>150</Text>
        </View>
      </View>
      <View style={generalStyles.divider} />
      <Text style={generalStyles.headerText1}>Kim progression</Text>
    </View>
  )
}


