import React from 'react';
import { View, StyleSheet,
    
 } from 'react-native';

const GridLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#FF5733' }]} />
        <View style={[styles.box, { backgroundColor: '#FFC300' }]} />
        <View style={[styles.box, { backgroundColor: '#DAF7A6' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#33FFBD' }]} />
        <View style={[styles.box, { backgroundColor: '#3380FF' }]} />
        <View style={[styles.box, { backgroundColor: '#8E44AD' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#FF33A8' }]} />
        <View style={[styles.box, { backgroundColor: '#FF8C00' }]} />
        <View style={[styles.box, { backgroundColor: '#2ECC71' }]} />
      </View>
    </View>
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1, 
    // margin: 2, 
  },
});
