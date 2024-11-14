// NavigationBar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/Logo-sf.png'


export default function NavigationBar({ currentScreen, setCurrentScreen }) {
  const navigation = useNavigation(); // Obter o objeto de navegação diretamente
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (screen) => {
    setCurrentScreen(screen);
    setActiveButton(screen);
    navigation.navigate(screen); // Navegar para a tela desejada
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={() => handlePress('Home')}
        style={[styles.navItem, activeButton === 'Home' && styles.activeBackground]}
      >
        <Icon name="home" size={24} color={currentScreen === 'Home' ? '#06A0B5' : '#fff'} />
        <Text style={currentScreen === 'Home' ? styles.activeText : styles.navText}>Home</Text>
      </TouchableOpacity> 

      {/* <Image style={styles.logo} source={Logo}/> */}

      <TouchableOpacity
        onPress={() => handlePress('Profile')}
        style={[styles.navItem, activeButton === 'Profile' && styles.activeBackground]}
      >
        <Icon name="person" size={24} color={currentScreen === 'Profile' ? '#06A0B5' : '#fff'} />
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
    backgroundColor: '#000000',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeBackground: { // Cor de fundo ao clicar
    borderRadius: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  activeText: {
    color: '#06A0B5',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logo: {
    width: 100,
    height: 100
  }
});
