import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

import styles from './styles/headerstyles';

const HeaderText = ({text}) => {
  return (
          <Text style={styles.text}>{text}</Text>
  );
};

export default HeaderText;
