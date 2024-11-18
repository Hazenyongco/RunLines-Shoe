import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const Home = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const router = useRouter();

  const items = [
    { id: 1, name: 'Nike InfinityRN 4', type: 'Nike', price: '₱7,029', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52fadde1-6b3e-4b2d-8a67-ae917f8bbe70/W+NIKE+REACTX+INFINITY+RUN+4.png' },
    { id: 2, name: 'Nike Pegasus EasyOn Electric', type: 'Nike', price: '₱7,999', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9316648-fbd5-4087-b3e4-d6da064c27d6/NIKE+REACTX+INFINITY+RUN+4+OLY.png' },
    { id: 3, name: 'Nike Vomero 17', type: 'Nike', price: '₱8,789', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f77b9d8-c7dc-49eb-af5c-d693189f943b/W+NIKE+VOMERO+17.png' },
    { id: 4, name: 'Nike Pegasus 41', type: 'Nike', price: '₱7,395', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a0e435e-bafe-4b7d-a8a0-c2d3a951cef2/W+AIR+ZOOM+PEGASUS+41.png' },
    { id: 5, name: 'Samba OG Shoes', type: 'Adidas', price: '₱6,567', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_00_standard.jpg' },
    { id: 6, name: 'Runfalcon 5', type: 'Adidas', price: '₱8,234', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da959c7d017e4779929912540530f014_9366/Runfalcon_5_Running_Shoes_Black_IE8816_01_standard.jpg' },
    { id: 7, name: 'Campus 00s Shoes', type: 'Adidas', price: '₱5,129', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4659ee058ba34bd2a5d0af500104c17d_9366/Campus_00s_Shoes_Black_HQ8708_01_standard.jpg' },
    { id: 8, name: 'Anthony Edwards 1 Low Basketball', type: 'Adidas', price: '₱5,300', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2c4e8087a4ef441aaa4808474c03985d_9366/Anthony_Edwards_1_Low_Basketball_Shoes_Kids_Red_JI4076_01_00_standard.jpg' },
    { id: 9, name: 'Tatum 3 "Welcome to the Garden"', type: 'Jordan', price: '₱7,784', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7347a6ea-f9f6-4024-be90-360a713e2fd5/JORDAN+TATUM+3.png' },
    { id: 10, name: 'Air Jordan XXXIX "Lumière"', type: 'Jordan', price: '₱6,567', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6dd32f84-3fe4-4976-b7db-16962c2f98cc/AIR+JORDAN+XXXIX.png' },
    { id: 11, name: 'Luka 3 "Imaginarium"', type: 'Jordan', price: '₱8,786', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8b1275d2-885f-48a9-9b2f-d09479fd8a5d/JORDAN+LUKA+3.png' },
    { id: 12, name: 'Jumpman MVP', type: 'Jordan', price: '₱7,655', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4121fcbc-b7cd-49a9-846b-d77932f08fc2/WMNS+JORDAN+MVP.png' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.type === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const getBackgroundColor = (index) => {
    const colors = ['#FFEBEE', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#F3E5F5'];
    return colors[index % colors.length];
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDetailsPress = (item) => {
    router.push({
      pathname: '/itemDetails',
      params: {
        id: item.id,
        name: item.name,
        price: item.price,
        imageUrl: item.imageUrl,
        type: item.type,
      },
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.itemContainer, { backgroundColor: getBackgroundColor(index) }]}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => handleDetailsPress(item)}
      >
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore for your next shoe.</Text>
      <Text style={styles.subtitle}>Experience Fashion with Our Shoe Lineup</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for Products"
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.categoryContainer}>
        {['All', 'Nike', 'Adidas', 'Jordan'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Link href="/home">
          <Ionicons name="home" size={24} color="black" />
        </Link>
        <Link href="/Profile">
          <Ionicons name="people" size={24} color="black" />
        </Link>
        <Link href="/cartPage">
          <Ionicons name="cart" size={24} color="black" />
        </Link>
        <Link href="/settings">
          <Ionicons name="settings" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#90CAF9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 4,
    backgroundColor: '#ddd',
    borderRadius: 25,
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#58788D',
  },
  categoryText: {
    color: '#3C2F2F',
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flex: 0.5,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  detailsButton: {
    marginTop: 10,
    backgroundColor: '#FF5722',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
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
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3C2F2F',
  },
});

export default Home;
