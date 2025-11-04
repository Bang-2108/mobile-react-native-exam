import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

// Khai báo kiểu dữ liệu cho props
type ProductProps = {
  name: string;
  price: string;
  image: ImageSourcePropType; // kiểu ảnh trong React Native
};

// Component con (có type)
const ProductCard = ({ name, price, image }: ProductProps) => {
  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

// Dữ liệu sản phẩm
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

// Component cha
const Sell = () => {
  return (
    <ScrollView style={styles.container}>
    
      {/* <View style={styles.header}>
        <Text style={styles.logo}>Băng Băng Shop</Text>
        <TextInput
          placeholder="🔍 Tìm sản phẩm..."
          style={styles.searchBox}
          placeholderTextColor="#888"
        />
      </View>
      <Text style={styles.title}>Sản phẩm nổi bật</Text> */}

      {/* Grid sản phẩm */}
      <View style={styles.gridContainer}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Sell;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 },
  header: { marginTop: 40, marginBottom: 10 },
  logo: { fontSize: 26, fontWeight: 'bold', color: '#ff4d4d', textAlign: 'center' },
  searchBox: {
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '30%',
    marginBottom: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 190,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    minHeight: 28,
    color: '#333',
  },
  price: {
    color: '#ff4d4d',
    marginVertical: 4,
    fontWeight: 'bold',
    fontSize: 13,
  },
  buyButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    position: 'absolute',
    bottom: 8,
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
