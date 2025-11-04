import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

const HelloNameState = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const sayHello = () => {
    Alert.alert(`Hello ${name}, ${age} tuổi!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name} {age ? `, ${age} tuổi` : ''}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên..."
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi..."
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      <Button title="Click on here" onPress={sayHello} />
    </View>
  );
};

export default HelloNameState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
