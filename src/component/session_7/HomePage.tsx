import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageSourcePropType,
  ListRenderItem,
} from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  image: ImageSourcePropType;
};

const ProductCard: React.FC<ProductCardProps> = ({name, price, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price.toLocaleString()}đ</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Áo thun basic',
    price: 90000,
    image: require('../../../assets/img/ao.jpg'),
  },
  {
    id: 2,
    name: 'Mũ lưỡi trai',
    price: 50000,
    image: require('../../../assets/img/mu.jpg'),
  },
  {
    id: 3,
    name: 'Quần Jean xanh',
    price: 120000,
    image: require('../../../assets/img/quan.jpg'),
  },
  {
    id: 4,
    name: 'Áo hoodie',
    price: 150000,
    image: require('../../../assets/img/ao.jpg'),
  },
  {
    id: 5,
    name: 'Mũ len mùa đông',
    price: 60000,
    image: require('../../../assets/img/mu.jpg'),
  },
  {
    id: 6,
    name: 'Quần short nam',
    price: 85000,
    image: require('../../../assets/img/quan.jpg'),
  },
  {
    id: 7,
    name: 'Áo hoodie',
    price: 150000,
    image: require('../../../assets/img/ao.jpg'),
  },
  {
    id: 8,
    name: 'Mũ len mùa đông',
    price: 60000,
    image: require('../../../assets/img/mu.jpg'),
  },
  {
    id: 9,
    name: 'Quần short nam',
    price: 85000,
    image: require('../../../assets/img/quan.jpg'),
  },
];

const HomePage: React.FC = () => {
  const renderItem: ListRenderItem<Product> = ({item}) => (
    <ProductCard name={item.name} price={item.price} image={item.image} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👕Cửa hàng quần áo</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7e0', 
  },
  header: {
    backgroundColor: '#F7A5A5',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },

  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#ffe7e0',
    flexGrow: 1, 
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  card: {
    flexBasis: '32%', 
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    color: '#ffa27c',
    marginVertical: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#F7A5A5',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
