import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type ChildProps = {
  currentName: string;
  currentAge: number;
  onChangeInfo: (newName: string, newAge: number) => void;
};

const Child: React.FC<ChildProps> = ({ currentName, currentAge, onChangeInfo }) => {
  const [name, setName] = useState(currentName);
  const [age, setAge] = useState(currentAge.toString());

  // Khi cha thay đổi (vd: cha cập nhật thủ công), con cũng thay đổi theo
  useEffect(() => {
    setName(currentName);
    setAge(currentAge.toString());
  }, [currentName, currentAge]);

  // Khi con thay đổi → gọi lên cha ngay lập tức
  const handleNameChange = (text: string) => {
    setName(text);
    onChangeInfo(text, parseInt(age) || 0);
  };

  const handleAgeChange = (text: string) => {
    setAge(text);
    onChangeInfo(name, parseInt(text) || 0);
  };

  return (
    <View style={styles.childBox}>
      <Text style={styles.childTitle}>Component Con</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên..."
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi..."
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />

      <Text style={styles.preview}>Tên hiển thị: {currentName}</Text>
      <Text style={styles.preview}>Tuổi hiển thị: {currentAge}</Text>
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({
  childBox: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    width: '90%',
  },
  childTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006d77',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginVertical: 6,
  },
  preview: {
    fontSize: 14,
    color: '#0077b6',
    marginTop: 5,
  },
});
