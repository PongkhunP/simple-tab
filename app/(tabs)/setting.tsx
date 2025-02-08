import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalStyles } from '../css/general'
import Taskbox from '../components/taskbox'
import { IconSymbol } from '@/components/ui/IconSymbol'
import Icon from 'react-native-vector-icons/Feather'
import { LineChart } from 'react-native-chart-kit'

const Setting = () => {
    return (
        <View style={generalStyles.container}>
            <View style={generalStyles.row}>
                <Text style={generalStyles.headerText1}>Theme</Text>
                {/* <IconSymbol size={28} name="arrow.down.app" color='black' /> */}
                <Icon name="menu" size={24} color="white" />
            </View>

            <View style={generalStyles.divider} />
            <Text style={generalStyles.headerText1}>Notification</Text>

            <View style={generalStyles.divider} />
            <Text style={generalStyles.headerText1}>Langauge</Text>
            
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})