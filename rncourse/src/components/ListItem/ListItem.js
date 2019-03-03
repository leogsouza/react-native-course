import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
  <View style={styles.litItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  litItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default listItem;