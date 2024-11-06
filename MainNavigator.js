import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sign from './src/Pages/Sign';
import Login from './src/Pages/Login';
import Player from './src/Pages/Player';
import Fav from './src/Pages/Favorites'
import Profile from './src/Pages/Profile'
import Welcome from './src/Pages/Welcome';

// import Faq from './src/Pages/Faq';

const Stack = createNativeStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Welcome" component={ Welcome } options={{headerShown: false}} />
        <Stack.Screen name="Home" component={ Home } options={{headerShown: false}}/>
        <Stack.Screen name='Sign' component={ Sign } options={{headerShown: false}} />
        <Stack.Screen name='Player' component={ Player } />
        <Stack.Screen name='Login' component={ Login } options={{headerShown: false}}/>
        <Stack.Screen name='Fav' component={ Fav } />
        <Stack.Screen name='Profile' component={ Profile } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}