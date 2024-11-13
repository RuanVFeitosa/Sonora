// MainNavigator.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sign from './src/Pages/Sign';
import Login from './src/Pages/Login';
import Player from './src/Pages/Player';
import Library from './src/Pages/Profile';
import Explore from './src/Pages/Explore';
import Fav from './src/Pages/Favorites';
import Profile from './src/Pages/Profile';
import Welcome from './src/Pages/Welcome';
import Search from './src/Pages/Explore';
import Playlist from './src/Pages/Playlist';
import Settings from './src/Pages/Settings';
import Menu from './src/Pages/Menu';
import NavigationBar from './src/Components/navigationBar';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const screensWithoutNavBar = [
    'Welcome',
    'Login',
    'Sign',
    'Playlist',
    'Settings',
    'Fav',
    'Player'
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Playlist" component={Playlist} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>

      {/* Condicional para exibir a NavigationBar */}
      {!screensWithoutNavBar.includes(currentScreen) && (
        <NavigationBar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      )}
    </NavigationContainer>
  );
}
