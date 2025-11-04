import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CalculationSpreadsheet = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const calculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult('Vui lòng nhập hai số hợp lệ');
      return;
    }

    let res = 0;
    switch (operation) {
      case 'add':
        res = numA + numB;
        setResult(`Tổng: ${res.toFixed(2)}`);
        break;
      case 'subtract':
        res = numA - numB;
        setResult(`Hiệu: ${res.toFixed(2)}`);
        break;
      case 'multiply':
        res = numA * numB;
        setResult(`Tích: ${res.toFixed(2)}`);
        break;
      case 'divide':
        if (numB === 0) {
          setResult('Không thể chia cho 0');
        } else {
          res = numA / numB;
          setResult(`Thương: ${res.toFixed(2)}`);
        }
        break;
      case 'compare':
        if (numA > numB) setResult(`${numA} > ${numB}`);
        else if (numA < numB) setResult(`${numA} < ${numB}`);
        else setResult(`${numA} = ${numB}`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Máy tính với Radio Buttons</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <Text style={styles.label}>Chọn phép toán:</Text>
      <View style={styles.radioGroup}>
        {[
          { label: 'Cộng', value: 'add' },
          { label: 'Trừ', value: 'subtract' },
          { label: 'Nhân', value: 'multiply' },
          { label: 'Chia', value: 'divide' },
          { label: 'So sánh', value: 'compare' },
        ].map((op) => (
          <TouchableOpacity
            key={op.value}
            style={styles.radioItem}
            onPress={() => setOperation(op.value)}
          >
            <View
              style={[
                styles.radioCircle,
                operation === op.value && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>{op.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Tính" onPress={calculate} color="#F7A5A5" />
      </View>

      <Text
        style={[
          styles.result,
          result.includes('Tổng') ||
          result.includes('Hiệu') ||
          result.includes('Tích') ||
          result.includes('Thương')
            ? { color: '#67C090' }
            : { color: '#FF0066' },
        ]}
      >
        {result}
      </Text>
    </View>
  );
};

export default CalculationSpreadsheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontSize: 18,
  },
  label: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  radioGroup: {
    marginTop: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F5BABB',
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: '#F5BABB',
  },
  radioLabel: {
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
