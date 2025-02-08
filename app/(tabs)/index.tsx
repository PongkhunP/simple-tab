import { Link, router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { generalStyles } from '../css/general';
import Taskbox from '../components/taskbox';
import { buttonStyles } from '../css/button';
import { LineChart } from 'react-native-chart-kit';
import CustomGauge from '../components/customgauagechart';
import ProgressSlider from '../components/ProgressSlider';
import CustomProgressBar from '../components/ProgressSlider';

const category = [
  {
    name: 'Done',
    value: 50
  },
  {
    name: 'Failed',
    value: 12
  },
  {
    name: 'Due',
    value: 75
  },
]

export default function HomeScreen() {
  return (
    <ScrollView
      // contentContainerStyle={generalStyles.scrollContainer} 
      showsVerticalScrollIndicator={false}
    >
      <View style={generalStyles.container}>
        <Text style={generalStyles.headerText1}>Incoming</Text>
        <TouchableOpacity onPress={() => router.back()}>

          <Taskbox title='Task 1' due_date='01/02/2025' checkboxActive={false} />
        </TouchableOpacity>
        <View style={generalStyles.divider} />

        <TouchableOpacity onPress={() => router.push('/screens/task')}>
          <View style={generalStyles.box}>
            <View style={generalStyles.row}>
              <Text style={generalStyles.headerText2}>Task</Text>
              <Text style={generalStyles.headerText2}>50</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/screens/note')}>

          <View style={generalStyles.box}>
            <View style={generalStyles.row}>
              <Text style={generalStyles.headerText2}>Note</Text>
              <Text style={generalStyles.headerText2}>150</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={generalStyles.divider} />
        <Text style={generalStyles.headerText1}>Kim progression</Text>
        <View style={generalStyles.row}>
          <View style={generalStyles.container}>
            {category.map((cat, index) => (
              <View key={index} style={generalStyles.sub_container}>
                <View style={[generalStyles.text_row , generalStyles.row_padding]}>
                  <Text style={generalStyles.headerText2}>{cat.value}</Text>
                  <Text style={generalStyles.headerText2}>{cat.name}</Text>
                </View>
                <CustomProgressBar value={cat.value} />
              </View>
            ))}
            <View style={generalStyles.row}>
              <Text style={generalStyles.headerText2}>Total</Text>
              <Text style={generalStyles.headerText2}>{category.reduce((sum, item) => sum + item.value, 0)}</Text>
            </View>
          </View>
          <CustomGauge value={75} />

        </View>
      </View>
    </ScrollView>
  )
}


