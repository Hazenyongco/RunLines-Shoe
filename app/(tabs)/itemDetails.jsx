import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, Link, useRouter } from 'expo-router';

const ItemDetails = () => {
  const { name, imageUrl, type, price } = useLocalSearchParams();
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation for fade-in/out

  // Show pop-up with animation
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
      }, 1500);
    });
  };

  // Add item to cart
  const addToCart = () => {
    const newCartItem = { name, imageUrl, type, price };
    setCart((prevCart) => [...prevCart, newCartItem]);
    showPopup();
  };

  // Handle Buy Now action
  const buyNow = () => {
    const newCartItem = { name, imageUrl, type, price };
    setCart((prevCart) => [...prevCart, newCartItem]);
    router.push('/cartPage');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Link href="/home" style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#444" />
        </Link>
        <Text style={styles.title}>RunLines Shoe</Text>
      </View>

      {/* Item Image */}
      <Image source={{ uri: imageUrl }} style={styles.itemImage} />

      {/* Item Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDetails}>{type}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.actionButton} onPress={addToCart}>
          <Text style={styles.actionButtonText}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Buy Now Button */}
        <TouchableOpacity style={[styles.actionButton, styles.buyNowButton]} onPress={buyNow}>
          <Text style={styles.actionButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* Animated Pop-Up */}
      {isPopupVisible && (
        <Animated.View style={[styles.popupContainer, { opacity: fadeAnim }]}>
          <View style={styles.popup}>
            <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
            <Text style={styles.popupText}>{name} added to cart!</Text>
          </View>
        </Animated.View>
      )}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#B3C7E6',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 10,
  },
  itemImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  itemName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemDetails: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: '#E94E77',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  popupContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  popupText: {
    fontSize: 18,
    color: '#444',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ItemDetails;
