import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather'; // Install this if you haven't: `npm install react-native-vector-icons`
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = ({title} : {title : string}) => {
  const router = useRouter();
  const [isOnEditScreen , setIsOnEditScreen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
      {isOnEditScreen ? 
      <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      :
      <Text></Text>
      }

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Menu Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#1abc9c',
  },
  header: {
    height: 50, // Adjust height if needed
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1abc9c',
    paddingHorizontal: 15,
    paddingVertical: 10, // Adjust padding
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomHeader;
