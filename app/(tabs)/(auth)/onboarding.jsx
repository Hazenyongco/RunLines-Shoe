import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import logo from '../../../assets/images/logo.png';
import shoe from '../../../assets/images/shoe.png'; 


const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => (
  <View style={styles.container}>
    {/* Shoe Illustration */}
    <Image
      source={shoe}
      style={[
        styles.shoe,
        { width: width * 0.90, height: height * 0.2 }, 
      ]}
    />

    {/* App Logo */}
    <Image
      source={logo}
      style={[
        styles.logo,
        { width: width * 0.90, height: width * 0.50 }, 
      ]}
    />

    {/* Welcome Text */}
    <Text style={styles.title}>Explore New Release Shoes!</Text>
    <Text style={styles.subtitle}>
      Advanced filters and sorting for effortless browsing
    </Text>

    {/* Buttons */}
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
    backgroundColor: '#90CAF9',
    paddingHorizontal: 20,
  },
  shoe: {
    marginTop: 10,
    marginBottom: 30, 
    resizeMode: 'contain',
  },
  logo: {
    marginBottom: 20, 
    resizeMode: 'contain',
    borderRadius: 10,
    
  },
  title: {
    fontSize: width * 0.07, 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.055, 
    color: '#66',
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
