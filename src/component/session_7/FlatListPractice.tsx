import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ImageSourcePropType } from 'react-native';

// Type
type Product = {
  id: number;
  name: string;
  price: string;
  img: ImageSourcePropType;
};

// Data
const ProductList: Product[] = [
  { id: 1, name: "Áo thun", price: "250.000VND", img: require('../../../assets/img/ao.jpg') },
  { id: 2, name: "Quần Jean", price: "300.000VND", img: require('../../../assets/img/quan.jpg') },
];

// Card
const Card = ({ name, price, img }: Omit<Product, 'id'>) => {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

// Main
const FlatListPractice = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ProductList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card name={item.name} price={item.price} img={item.img} />
        )}
        // contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default FlatListPractice;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "gray",
  },
});
