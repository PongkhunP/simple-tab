import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressType {
    value : number
}

const CustomProgressBar = (progress : ProgressType) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress.value}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "flex-start"},
  label: {fontSize: 18},
  progressBar: {
    width: 100,
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 1,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
});

export default CustomProgressBar;