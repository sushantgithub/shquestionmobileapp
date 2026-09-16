import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  progress: number; // 0-1
  color?: string;
  height?: number;
  backgroundColor?: string;
}

export function ProgressBar({ progress, color = '#2aa889', height = 6, backgroundColor = '#1a2d38' }: Props) {
  return (
    <View style={[styles.track, { height, backgroundColor }]}>
      <View
        style={[
          styles.fill,
          { width: `${Math.min(100, Math.max(0, progress * 100))}%`, height, backgroundColor: color },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    borderRadius: 99,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    borderRadius: 99,
  },
});
