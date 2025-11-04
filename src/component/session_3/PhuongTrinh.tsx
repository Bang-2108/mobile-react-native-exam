import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

const PhuongTrinh = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState('');

    const inputA = useRef<TextInput>(null);
    const clearInput = () => {
        setA('');
        setB('');
    }
    const inputB = useRef<TextInput>(null);
    const Pt = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);


        if(isNaN(numA) &&  isNaN(numB)){
            setResult('Please enter the number ');
            clearInput();
            inputA.current?.focus();
            return;
        }

        if(isNaN(numA)){
            setResult('Please enter the number');
            setA('');
            inputA.current?.focus();
            return;
        }
        if(isNaN(numB)){
            setResult('Please enter the number ');
            setB('');
            inputB.current?.focus();
            return;
        }

        if (numA === 0){
            if (numB === 0){
                setResult('pt vô số nghiệm');
            } else{
                setResult('pt vô nghiệm');
            }
        } else{
            const x = -numB/numA;
            setResult(`Nghiệm x = ${x.toFixed(2)}`);
        }
    }
  return (
    <View>
        <View style={{backgroundColor: 'yellow', marginHorizontal: 10, marginTop: 10, marginBottom: 0, padding: 10}}>
        <Text style={{color: 'green'}}>Solve the linear equation ax+b = 0</Text>
        <TextInput ref={inputA} autoFocus={true} placeholder='Enter number a' onChangeText = {(text) => setA(text)} value={a}/>
        <TextInput placeholder='Enter number b' onChangeText={(text)=> setB(text)} value={b}/>
        <Button onPress={Pt} title="Solve" color="blue" accessibilityLabel="Learn more about this purple button"></Button>
    </View>

    <View >
        <Text  style={{backgroundColor: '#BADFDB', padding: 10, marginHorizontal: 10, marginTop: 0, marginBottom: 10 }}>Result: {result} </Text>
    </View>
    </View>
  )
}

export default PhuongTrinh