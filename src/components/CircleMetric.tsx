import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress: number;
}

export const CircularProgress = ({ size, strokeWidth, progress }: CircularProgressProps) => {
  const animated = new Animated.Value(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  //const strokeDashoffset = Animated.multiply(animated, circumference / 100);

  useEffect(() => {
    Animated.timing(animated, {
      toValue: progress,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke="#333"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={-1455}
          strokeLinecap="round"
        />
        <Circle
          stroke="#4caf50"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={-100}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{progress.toFixed(0)}</Text>
        <Text style={styles.text}>Assumidos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    position: 'absolute',
  },
  number: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#AAA',
    textAlign: 'center',
    fontSize: 12,
  },
});
