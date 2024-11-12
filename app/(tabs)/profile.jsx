import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, Modal, TextInput } from 'react-native';

const UserInfoScreen = () => {
  // Sample user data with additional personal information
  const [user, setUser] = useState({
    name: 'Quennie Hazen Yongco',
    email: 'quenniehazenyongco@gmail.com',
    phone: '+639655375450',
    address: 'Ilihan, Toledo City',
    birthdate: 'March 27, 2004',
    profileImage: 'https://i.pinimg.com/564x/f7/d1/30/f7d130c9c3c59ca021d08384a5d0e2da.jpg',
  });
  
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState(user.name);

  const handleEditProfile = () => {
    setModalVisible(true);
  };

  const handleSaveProfile = () => {
    setUser(prevUser => ({ ...prevUser, name: updatedName }));
    setModalVisible(false);
    Alert.alert('Profile Updated', 'Your profile has been updated successfully!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => Alert.alert('Logged Out', 'You have been logged out.') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      <Text style={styles.label}>Quennie  Hazen Yongco</Text>


      {/* Container for User Information */}
      <View style={styles.infoContainer}>
        {/* Name Container */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>
        
        {/* Email Container */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        
        {/* Phone Container */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
        
        {/* Address Container */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{user.address}</Text>
        </View>
        
        {/* Birthdate Container */}
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Birthdate:</Text>
          <Text style={styles.value}>{user.birthdate}</Text>
        </View>

        {/* Buttons */}
      
        <View style={styles.buttonContainer}>
          <Button title="Logout" color="red" onPress={handleLogout} />
        </View>
      </View>

      {/* Edit Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Edit Profile</Text>
          <TextInput
            style={styles.input}
            value={updatedName}
            onChangeText={setUpdatedName}
            placeholder="Enter your name"
          />
          <View style={styles.modalButtonContainer}>
            <Button title="Save" onPress={handleSaveProfile} />
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#90CAF9',
  },
  profileImage: {
    width:80,
    height: 80,
    borderRadius: 75,
    marginBottom: 15,
  },
  
  detailContainer: {
    padding: 10,
    marginVertical: 3,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#FFB6C1', 
    justifyContent: 'center',

  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 85,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
   
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default UserInfoScreen