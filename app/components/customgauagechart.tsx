import React from "react";
import { View } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";

const CustomGauge = ({ value }: { value: number }) => {
  const radius = 80;
  const strokeWidth = 15;
  const center = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const percentage = value / 100;
  const strokeDashoffset = circumference * (1 - percentage);

  return (
    <View style={{ alignItems: "center", justifyContent: "center"}}>
      <Svg width={200} height={200} viewBox="0 0 200 200">
        {/* Background Circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Foreground Progress Arc */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#4caf50"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${center} ${center})`} // Fix rotation
        />
        {/* Center Text */}
        <Text
          x={center}
          y={center}
          fontSize="24"
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {value}%
        </Text>
      </Svg>
    </View>
  );
};

export default CustomGauge;
