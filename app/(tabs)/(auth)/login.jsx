import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // for programmatic navigation
import logo from '../../../assets/images/logo.png'; // Adjust the path as per your project structure

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router for navigation

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Logged In', `Welcome back, ${email}!`);
      // After successful login, navigate to the home page
      router.push('/home'); // this should match the route for your HomePage
    } else {
      Alert.alert('Error', 'Please enter email and password.');
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

      <Text style={styles.header}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link to Sign Up Page */}
      <TouchableOpacity onPress={() => router.push('/signup')} style={styles.link}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
    height: 200, 
    marginBottom: 20,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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
    backgroundColor: '#4A90E2',
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
  },
  linkText: {
    color: '#4A90E',
    fontSize: 14,
  },
});

export default LoginPage;
