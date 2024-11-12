import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import React, { useState } from 'react';

// Sample data for demonstration, including images
const initialShoeItems = [
  {
    id: '1',
    name: 'Nike InfinityRN ',
    price: 7029,
    quantity: 1,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52fadde1-6b3e-4b2d-8a67-ae917f8bbe70/W+NIKE+REACTX+INFINITY+RUN+4.png',
  },
  {
    id: '2',
    name: 'Nike Vomero 17',
    price: 8895,
    quantity: 1,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f77b9d8-c7dc-49eb-af5c-d693189f943b/W+NIKE+VOMERO+17.png',
  },
];

const Bag = () => {
  const [shoeItems, setShoeItems] = useState(initialShoeItems);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>₱{(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => changeQuantity(item.id, -1)} disabled={item.quantity === 1} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => changeQuantity(item.id, 1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const changeQuantity = (id, change) => {
    setShoeItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
      )
    );
  };

  const removeItem = (id) => {
    setShoeItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    Alert.alert('Checkout', `Your total is ₱${total}. Thank you for your purchase!`);
  };

  const calculateTotal = () => {
    return shoeItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      <Text style={styles.subtitle}>Shoe Items</Text>
      <FlatList
        data={shoeItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Text style={styles.totalText}>Total: ₱{calculateTotal()}</Text>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#90CAF9',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 15,
    color: '#28A790',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 6,
  },
  quantityButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 3,
    fontSize: 15,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#FF6B6B',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 3,

  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Bag;
