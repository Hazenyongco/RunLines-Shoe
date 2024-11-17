import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const OnboardingScreen = () => (
  <View style={styles.container}>
    {/* App Logo or Illustration */}
    <Image
      source={{ uri: 'https://www.shutterstock.com/image-vector/running-shoe-icon-logo-design-260nw-2422032373.jpg' }}
      style={styles.logo}
    />

    {/* Welcome Text */}
    <Text style={styles.title}>Welcome to Your App!</Text>
    <Text style={styles.subtitle}>
      Discover, connect, and simplify your experience. Let's get started!
    </Text>

    {/* Buttons for Login and Signup */}
    <View style={styles.buttonContainer}>
      <Link href="/login" style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </Link>
      <Link href="/signup" style={styles.signupButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F3',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  signupButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
