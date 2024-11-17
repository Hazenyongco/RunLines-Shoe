import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Animated, Alert } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BuyNowPage = () => {
  const { name, imageUrl, type, price } = useLocalSearchParams();

  // Default values if parameters are undefined
  const productName = name || 'Default Product Name';
  const productImageUrl = imageUrl || 'https://via.placeholder.com/150'; // Fallback image URL
  const productType = type || 'Default Product Type';
  const productPrice = price || '0.00';

  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0)); // For pop-up animation
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to show the pop-up
  const showPopup = () => {
    setIsPopupVisible(true);

    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Hold the pop-up for a while and then fade-out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setIsPopupVisible(false);
        });
      }, 2000);
    });
  };

  // Confirm Purchase Handler
  const handleConfirmPurchase = () => {
    if (!nameInput || !addressInput || !paymentMethod) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Simulate order completion with a pop-up
    showPopup();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Buy Now</Text>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <Image source={{ uri: productImageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{productName}</Text>
          <Text style={styles.type}>{productType}</Text>
          <Text style={styles.price}>${productPrice}</Text>
        </View>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={nameInput}
          onChangeText={setNameInput}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={addressInput}
          onChangeText={setAddressInput}
          multiline
        />

        <Text style={styles.label}>Payment Method</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter payment method (e.g., Credit Card, PayPal)"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />
      </View>

      {/* Confirm Purchase Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPurchase}>
        <Text style={styles.confirmButtonText}>Confirm Purchase</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <Link href="/home" style={styles.backButton}>
        <Text style={styles.confirmButtonText}>Back to Home</Text>
      </Link>

      {/* Animated Pop-Up */}
      {isPopupVisible && (
        <Animated.View style={[styles.popupContainer, { opacity: fadeAnim }]}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>Order Complete!</Text>
          </View>
        </Animated.View>
      )}
      
      <View style={styles.bottomNav}>
        <Link href="/home"> <Ionicons name="home" size={24} color="black" /> </Link>
        <Link href="/Profile"> <Ionicons name="people" size={24} color="black" /> </Link>
        <Link href="/cartPage"> <Ionicons name="cart" size={24} color="black" /> </Link>
        <Link href="/settings"> <Ionicons name="settings" size={24} color="black" /> </Link>
      </View>

    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF7F3',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  productDetails: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  type: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E94E77',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    alignItems: 'center',
  },
  popupContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    alignItems: 'center',
    zIndex: 10,
  },
  popup: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  popupText: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#E1F5FE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    shadowColor: '#B0BEC5',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default BuyNowPage;
