import { StyleSheet, Text, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React from 'react'

type Products =  {
    name: string,
    price: number,
    img: ImageSourcePropType,
};

const Card = ({name, price, img}: Products) => {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.img}></Image>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity>
                <Text>Mua ngay</Text>
            </TouchableOpacity>
        </View>
    )
}
// const List = [
const products = [
  {
    id: 1,
    name: 'Áo thun basic',
    price: '90.000đ',
    image: require('../../../assets/img/ao.jpg'),
  },
  {
    id: 2,
    name: 'Mũ lưỡi trai',
    price: '50.000đ',
    image: require('../../../assets/img/mu.jpg'),
  },
  {
    id: 3,
    name: 'Quần Jean xanh',
    price: '120.000đ',
    image: require('../../../assets/img/quan.jpg'),
  },
];

const Sell = () => {
  return (
    <View style={styles.container}>
      {/* <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} />
      <Card name="Áo thun" price={20} img={require('../../../assets/img/ao.jpg')} /> */}
      
    </View>
  )
}

export default Sell

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 30,
        gap: 20,
    },
    card: {
        width: '30%',
        height: '30%',
        // marginTop: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 25,

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        // alignItems: 'center',
        color: 'red'

    },
    img: {
        width: 100,
        height: 100
    },
    button: {

    }
})