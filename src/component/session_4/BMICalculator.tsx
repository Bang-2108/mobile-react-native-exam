// setHeight là hàm và cập nhật dữ liệu từ input để lưu vào state
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useRef, useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState('');
  const [color, setColor] = useState('');

  const inputHeight = useRef<TextInput>(null);
  const inputWeight = useRef<TextInput>(null);

  const clearInput = () => {
    setHeight('');
    setWeight('');
    setResult('');
    inputHeight.current?.focus();
  };

  const Calculate = () => {
    let chieuCao = parseFloat(height);
    const canNang = parseFloat(weight);

    if (!height || !weight) {
      setResult('Please enter both height and weight');
      return;
    }
    if (isNaN(canNang) || isNaN(chieuCao)) {
      setResult('Please enter numbers only');
      return;
    }
    if (chieuCao <= 0 || canNang <= 0) {
      setResult('Please enter values greater than 0');
      return;
    }

    if (chieuCao > 10) {
      chieuCao = chieuCao / 100;
    }

    if (chieuCao > 3 || canNang > 300) {
      setResult('Please check your input values');
      return;
    }

    const bmi = canNang / (chieuCao * chieuCao);

    if (bmi < 18.5) {
      setResult(`BMI: ${bmi.toFixed(1)} - Underweight`);
      setColor('#B3BFFF')
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult(`BMI: ${bmi.toFixed(1)} - Normal weight`);
      setColor('#70B2B2')
    } else if (bmi >= 25 && bmi < 30) {
      setResult(`BMI: ${bmi.toFixed(1)} - Overweight`);
      setColor('#FFC400')
    } else {
      setResult(`BMI: ${bmi.toFixed(1)} - Obese`);
      setColor('#FF3F7F')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMICalculator</Text>

      <Text style={styles.label}>Height (m or cm):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your height"
        onChangeText={setHeight}
        ref={inputHeight}
        value={height}
        keyboardType="numeric"
      />


      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your weight"
        onChangeText={setWeight}
        ref={inputWeight}
        value={weight}
        keyboardType="numeric"
      />

      <View style={styles.button}>
        <Button title="Calculate" color="#A2D5C6" onPress={Calculate} />
        <Button title="Reset" color="#FFB4B4" onPress={clearInput} />
      </View>

      <View style={[styles.result, {backgroundColor: color }]}>
        <Text style={styles.result}>Result: {result}</Text>
      </View>

    </View>
  );
};

export default BMICalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F5CBCB',
    padding: 15,
    backgroundColor: '#FFEAEA',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    fontSize: 24,
    marginTop: 15,
    color: 'green',
  },
});
