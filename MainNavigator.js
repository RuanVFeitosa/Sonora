// MainNavigator.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sign from './src/Pages/Sign';
import Login from './src/Pages/Login';
import Player from './src/Pages/Player';
import Library from './src/Pages/Library';
import Explore from './src/Pages/Explore';
import Fav from './src/Pages/Favorites';
import Profile from './src/Pages/Profile';
import Welcome from './src/Pages/Welcome';
import Playlist from './src/Pages/Playlist';
import Menu from './src/Pages/Menu';
import NavigationBar from './src/Components/navigationBar';
import CreatePlaylist from './src/Pages/CreatePlaylist';
import Edit from './src/Pages/Edit';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [currentScreen, setCurrentScreen] = useState('Welcome'); // Define a tela inicial como "Welcome"

  const screensWithoutNavBar = [
    'Welcome',
    'Sign',
    'Login',
    'Player',
    'Settings',
    'Create Playlist',
    'Edit'
  ];

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (state) {
          const route = state.routes[state.index];
          setCurrentScreen(route.name);
        }
      }}
    >
      <Stack.Navigator
        initialRouteName="Sign" 
        screenOptions={{
          headerShown: false,
          statusBarHidden : true,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome}  />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Playlist" component={Playlist}/>
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Create Playlist" component={CreatePlaylist} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>

      {/* Exibe a NavigationBar apenas se a tela atual não estiver em `screensWithoutNavBar` */}
      {!screensWithoutNavBar.includes(currentScreen) ? (
        <NavigationBar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      ) : null}
    </NavigationContainer>
  );
}
