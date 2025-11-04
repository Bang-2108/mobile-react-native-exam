import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useRef, useState } from 'react'

const BIMPractice = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [result, setResult] = useState<string>('')

    const inputHeight = useRef<TextInput>(null)
    const inputWeight = useRef<TextInput>(null)

    const ClearInput = () => {
        setHeight('')
        setHeight('')
        setResult('')

    }

    const BMICalcalate = () => {
        const cannang = parseFloat(height)
        const chieucao = parseFloat(weight)

        if (isNaN(cannang) || isNaN(chieucao) || cannang<=0 || chieucao<=0 ) {
            Alert.alert('Please enter the valid input');
            return
        }

        const BMI = cannang/(chieucao*chieucao)
    }



    return (
        <View>
            <Text>BIMPractice</Text>
            <Text>Cân nặng</Text>
            <TextInput
                placeholder='Nhập cân nặng'
                value=''
                // onChangeText={}
            />
            <Text>Chiều cao</Text>
            <TextInput
                placeholder='Nhập chiều cao'
                value=''
                // onChangeText={}
            />
        </View>
    )
    
}

export default BIMPractice

const styles = StyleSheet.create({

})