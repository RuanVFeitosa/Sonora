// NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavigationBar({ currentScreen, setCurrentScreen }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setCurrentScreen('Home')} style={styles.navItem}>
        <Text style={currentScreen === 'Home' ? styles.activeText : styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentScreen('Search')} style={styles.navItem}>
        <Text style={currentScreen === 'Search' ? styles.activeText : styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentScreen('Profile')} style={styles.navItem}>
        <Text style={currentScreen === 'Profile' ? styles.activeText : styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1DB954',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  activeText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
