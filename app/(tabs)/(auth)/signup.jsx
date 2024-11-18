import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button
import { useRouter } from 'expo-router'; // For programmatic navigation
import logo from '../../../assets/images/logo.png'; // Adjust the path based on your project structure

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router for navigation

  const handleSignUp = () => {
    if (name && email && password) {
      Alert.alert('Sign Up Successful', `Welcome, ${name}!`);
      router.push('/login'); // After sign up, navigate to login page
    } else {
      Alert.alert('Error', 'Please fill all fields.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      <Text style={styles.header}>Sign Up</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Link to Login Page */}
      <TouchableOpacity onPress={() => router.push('/login')} style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  logo: {
    width: 150,
    height:200, 
    marginBottom: 15,
    marginTop: 40,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    color: '#4A90E2',
    fontSize: 14,
  },
  linkText: {
    color: '#4A90E',
    fontSize: 14,
  },
});

export default SignUpPage;
