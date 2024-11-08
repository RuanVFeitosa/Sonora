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
import Search from './src/Pages/Search'
import explore from './src/Pages/explore';
import Playlist from './src/Pages/Playlist';


// import Faq from './src/Pages/Faq';

const Stack = createNativeStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Playlist"> 
        <Stack.Screen name="Welcome" component={ Welcome } options={{headerShown: false}} />
        <Stack.Screen name="Home" component={ Home } options={{headerShown: false}}/>
        <Stack.Screen name="Explore" component={ explore } options={{headerShown: false}}/>
        <Stack.Screen name='Sign' component={ Sign } options={{headerShown: false}} />
        <Stack.Screen name='Player' component={ Player } options={{headerShown: false}} />
        <Stack.Screen name='Playlist' component={ Playlist } options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={ Login } options={{headerShown: false}}/>
        <Stack.Screen name='Fav' component={ Fav } options={{headerShown: false}}/>
        <Stack.Screen name='Profile' component={ Profile } options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}