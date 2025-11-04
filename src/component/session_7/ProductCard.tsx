import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductCard = ({name, price, image}: {name: string; price: string; image:any}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/> 
        <Text>{name}</Text>
        <Text>{price}</Text>
        <TouchableOpacity>
            <Text>Mua ngay</Text>
        </TouchableOpacity>

    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {},
    image: {}
})