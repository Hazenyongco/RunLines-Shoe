import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';


const Home = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Running');

  const items = [
    {
      id: '1',
      title: 'Nike InfinityRN 4',
      description: 'Maximum cushioning provides elevated comfort for everyday runs...',
      price: '₱7,029',
      rating: 8.5,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52fadde1-6b3e-4b2d-8a67-ae917f8bbe70/W+NIKE+REACTX+INFINITY+RUN+4.png',
      category: 'Running',
      backgroundColor: '#FFE4C4',
    },
    {
      id: '2',
      title: 'Nike Pegasus EasyOn Electric',
      description: 'Responsive cushioning in the Pegasus provides an energised ride...',
      price: '₱7,895',
      rating: 9.7,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9316648-fbd5-4087-b3e4-d6da064c27d6/NIKE+REACTX+INFINITY+RUN+4+OLY.png',
      category: 'Running',
      backgroundColor: '#FFB6C1', 
    },
    {
      id: '3',
      title: 'Nike Vomero 17',
      description: 'Maximum cushioning provides a comfortable ride for everyday runs...',
      price: '₱8,895',
      rating: 7.3,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f77b9d8-c7dc-49eb-af5c-d693189f943b/W+NIKE+VOMERO+17.png',
      category: 'Running',
      backgroundColor: '#ADD8E6', 
    },
    {
      id: '4',
      title: 'Nike Pegasus Plus',
      description: 'Take responsive cushioning to the next level with the Pegasus Plus...',
      price: '₱9,895',
      rating: 8.7,
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9c7ff379-a69f-4dc5-a979-a6de2816d2a2/W+PEGASUS+PLUS.png',
      category: 'Running',
      backgroundColor: '#D8BFD8',
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'Running' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { backgroundColor: item.backgroundColor }]}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: {item.rating} ⭐</Text>
      </View>
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
      <TextInput
        style={styles.subtitle}
        placeholder="New Collection"
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'All' && styles.selectedCategory]}
          onPress={() => handleCategorySelect('All')}
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Running' && styles.selectedCategory]}
          onPress={() => handleCategorySelect('Running')}
        >
          <Text style={styles.categoryText}>Running</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Sports' && styles.selectedCategory]}
          onPress={() => handleCategorySelect('Sports')}
        >
          <Text style={styles.categoryText}>Sports</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
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
    padding: 1,
    borderRadius: 10,
    marginBottom: 3,
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
    marginBottom: 30,
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
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ratingContainer: {
    marginTop: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#FFD700',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Home;
