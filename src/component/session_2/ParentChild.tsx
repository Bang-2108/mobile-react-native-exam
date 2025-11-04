import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

type ChildProps = {
  name: string;
  age: number;
  onChange: (newName: string, newAge: number) => void; 
};

const ParentChild = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(20);

  const handleChange = (newName: string, newAge: number) => {
    setName(newName);
    setAge(newAge);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ParentChild</Text>

      <TextInput
        placeholder="Nhập tên..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Nhập tuổi..."
        value={age.toString()}
        keyboardType="numeric"
        onChangeText={(text) => setAge(Number(text))}
        style={styles.input}
      />

      <Text style={styles.textLabel}>Tên của cha: {name}</Text>
      <Text style={styles.textLabel}>Tuổi của cha: {age}</Text>

      <Child name={name} age={age} onChange={handleChange} />
    </View>
  );
};

const Child = ({ name, age, onChange }: ChildProps) => {
  return (
    <View style={styles.childContainer}>
      <Text style={styles.title}>Child</Text>

      <Text style={styles.textLabel}>Tên của cha truyền vào: {name}</Text>
      <Text style={styles.textLabel}>Tuổi của cha truyền vào: {age}</Text>

      <TextInput
        placeholder="Nhập tên con để cập nhật lên cha"
        value={name}
        onChangeText={(text) => onChange(text, age)} 
        style={styles.input}
      />
      <TextInput
        placeholder="Nhập tuổi con để cập nhật lên cha"
        value={age.toString()}
        keyboardType="numeric"
        onChangeText={(text) => onChange(name, Number(text))} 
        style={styles.input}
      />
    </View>
  );
};

export default ParentChild;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', 
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
    color: '#C2185B', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#F8BBD0',
    backgroundColor: '#FFFFFF',
    marginVertical: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    color: '#880E4F', 
    shadowColor: '#F48FB1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  childContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#FFE4EC', 
    borderRadius: 14,
    borderColor: '#F8BBD0',
    borderWidth: 1,
    shadowColor: '#F48FB1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textLabel: {
    fontSize: 16,
    marginTop: 6,
    color: '#AD1457',
  },
});
