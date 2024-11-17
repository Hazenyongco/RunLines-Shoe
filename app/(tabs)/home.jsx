import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const PetSitApp = () => {
  const [filter, setFilter] = useState('All');

  const items = [
    { id: 1, name: 'Nike InfinityRN 4', type: 'Nike', price: '₱7,029', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52fadde1-6b3e-4b2d-8a67-ae917f8bbe70/W+NIKE+REACTX+INFINITY+RUN+4.png' },
    { id: 2, name: 'Nike Pegasus EasyOn Electric', type: 'Nike', price: '₱7,029', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9316648-fbd5-4087-b3e4-d6da064c27d6/NIKE+REACTX+INFINITY+RUN+4+OLY.png' },
    { id: 3, name: 'Nike Vomero 17', type: 'Nike', price: '₱7,029',imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f77b9d8-c7dc-49eb-af5c-d693189f943b/W+NIKE+VOMERO+17.png' },
    { id: 4, name: 'Samba OG Shoes', type: 'Adidas', price: '₱7,029', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg' },
    { id: 5, name: 'Runfalcon 5', type: 'Adidas', price: '₱7,029', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da959c7d017e4779929912540530f014_9366/Runfalcon_5_Running_Shoes_Black_IE8816_01_standard.jpg' },
    { id: 6, name: 'Campus 00s Shoes', type: 'Adidas', price: '₱7,029', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4659ee058ba34bd2a5d0af500104c17d_9366/Campus_00s_Shoes_Black_HQ8708_01_standard.jpg' },
    { id: 7, name: 'Reebok Court Advance', type: 'Other', price: '₱7,029', imageUrl: 'https://reebok.ph/cdn/shop/files/courtadvnceblack-_1.png?v=1693886309&width=823' },
  ];

  // Filter items based on selected filter
  const filteredItems = items.filter((item) => filter === 'All' || item.type === filter);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RunLines Shoe</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        {/* Greeting and heading */}
        <Text style={styles.greeting}>Hello, Hazen!</Text>
        <Text style={styles.heading}>Experience Fashion with Our Shoe Lineup</Text>

        {/* Search Input */}
        <TextInput style={styles.searchInput} placeholder="Search for items..." />

        {/* Filter Buttons */}
        <View style={styles.filterButtons}>
          {['All', 'Adidas', 'Nike', 'Other'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.filterButton, filter === type && styles.activeFilterButton]}
              onPress={() => setFilter(type)}
            >
              <Text style={filter === type ? styles.activeFilterText : styles.filterText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Items Cards */}
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetails}>{item.type}</Text>
                <Text style={styles.itemPrice}>Price {item.price}</Text>
              </View>
              <Link
                href={`/itemDetails?name=${item.name}&imageUrl=${item.imageUrl}&type=${item.type}&price=${item.price}`}
                asChild
              >
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Details</Text>
                </TouchableOpacity>
              </Link>
            </View>
          ))
        ) : (
          <Text style={styles.noItemsText}>No items available for the selected filter.</Text>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/home"> <Ionicons name="home" size={24} color="black" /> </Link>
        <Link href="/Profile"> <Ionicons name="people" size={24} color="black" /> </Link>
        <Link href="/cartPage"> <Ionicons name="cart" size={24} color="black" /> </Link>
        <Link href="/settings"> <Ionicons name="settings" size={24} color="black" /> </Link>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFF', // Light pastel blue background
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  scrollContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C6BC0',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1.5,
    borderColor: '#B3C7E6',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F4A1C1',
    borderRadius: 25,
    elevation: 2, // Adds a slight shadow effect to the buttons
  },
  activeFilterButton: {
    backgroundColor: '#B6A4D2',
  },
  filterText: {
    fontSize: 16,
    color: '#fff',
  },
  activeFilterText: {
    fontSize: 16,
    color: '#333',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#B0BEC5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  itemDetails: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginTop: 6,
  },
  bookButton: {
    backgroundColor: '#B6A4D2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bookButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  noItemsText: {
    fontSize: 16,
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: 20,
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

export default PetSitApp;
