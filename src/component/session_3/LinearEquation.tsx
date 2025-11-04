import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useRef, useState } from 'react'

const LinearEquation = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState('')

  const inputA = useRef<TextInput>(null)
  const inputB = useRef<TextInput>(null)

  const clearInput = () => {
    setA('')
    setB('')
    setResult('')
    inputA.current?.focus()
  }

  const pt = () => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) && isNaN(numB)) {
      setResult('Please enter valid numbers')
      clearInput()
      return
    }

    if (isNaN(numA)) {
      setResult('Please enter number A')
      setA('')
      inputA.current?.focus()
      return
    }

    if (isNaN(numB)) {
      setResult('Please enter number B')
      setB('')
      inputB.current?.focus()
      return
    }

    if (numA === 0) {
      if (numB === 0)
        setResult('Phương trình vô số nghiệm')
      else
        setResult('Phương trình vô nghiệm')
    } else {
      const x = -numB / numA
      setResult(`Nghiệm x = ${x.toFixed(2)}`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linear Equation (ax + b = 0)</Text>

      <TextInput
        style={styles.input}
        placeholder='Enter number A'
        value={a}
        onChangeText={setA}
        ref={inputA}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Enter number B'
        value={b}
        onChangeText={setB}
        ref={inputB}
        keyboardType='numeric'
      />

      <View style={{ marginTop: 20 }}>
        <Button title='Solve' onPress={pt} color='#739EC9' />
        <View style={{ marginTop: 10 }} />
        <Button title='Clear' onPress={clearInput} color='#F75270' />
      </View>

      <Text style={styles.result}>Result: {result}</Text>
    </View>
  )
}

export default LinearEquation

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    fontSize: 22,
    color: 'black',
    marginTop: 15,
    backgroundColor: '#FFD5D5',
    padding: 10,
    borderRadius: 8,
  },
  result: {
    backgroundColor: '#BADFDB',
    height: 45,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 8,
  },
})
