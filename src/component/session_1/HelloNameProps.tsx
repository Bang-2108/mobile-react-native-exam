import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

type Props = {
  name: string;
  age: number;
};

const HelloNameProps: React.FC<Props> = ({ name, age }) => {
  // Hàm hiển thị thông báo khi nhấn nút
  const showAlert = () => {
    Alert.alert('Thông báo', `Hello ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}, {age} tuổi</Text>
      <Button title="Nhấn vào đây" onPress={showAlert} />
    </View>
  );
};

export default HelloNameProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
});
