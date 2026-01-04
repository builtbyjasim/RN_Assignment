import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../misc';

const EmptyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.string}>No Data found</Text>
    </View>
  );
};

export default EmptyCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  string: {
    fontSize: 12,
    fontWeight: '500',
    color: COLOR.textSecondary,
    includeFontPadding: false,
  },
});
