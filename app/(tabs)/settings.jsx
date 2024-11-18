import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationAccessEnabled, setLocationAccessEnabled] = useState(true);

  const toggleNotifications = () =>
    setNotificationsEnabled((prevState) => !prevState);

  const toggleDarkMode = () =>
    setDarkModeEnabled((prevState) => !prevState);

  const toggleLocationAccess = () =>
    setLocationAccessEnabled((prevState) => !prevState);

  const handlePrivacyPolicy = () => {
    Alert.alert('Privacy Policy', 'View our Privacy Policy online.', [
      { text: 'OK' },
    ]);
  };

  const handleTermsOfService = () => {
    Alert.alert('Terms of Service', 'View our Terms of Service online.', [
      { text: 'OK' },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Settings Header */}
      <View style={styles.header}>
        <Link href="/home" style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#444" />
        </Link>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Notifications */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>

        {/* Dark Mode */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        </View>

        {/* Location Access */}
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Location Access</Text>
          <Switch
            value={locationAccessEnabled}
            onValueChange={toggleLocationAccess}
          />
        </View>

        {/* Account Settings */}
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Edit Account Information</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        {/* App Preferences */}
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Manage Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.buttonText}>Language Settings</Text>
        </TouchableOpacity>

        {/* Privacy and Terms */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={handlePrivacyPolicy}
        >
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={handleTermsOfService}
        >
          <Text style={styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90CAF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Make sure there's space for the bottom navigation
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingText: {
    fontSize: 16,
  },
  settingButton: {
    backgroundColor: '#FFEBEE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'semi-bold',
  },
  linkButton: {
    marginVertical: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
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

export default SettingsPage;
