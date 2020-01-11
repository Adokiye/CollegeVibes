import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

import styles from './styles/styles.js';

const MainButton = ({text, onPress = () => {}, isLoading}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading}
      style={styles.container}>
          <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
