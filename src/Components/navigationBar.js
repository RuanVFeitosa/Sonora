// // src/navigation/MainTabs.js
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import Home from '../Pages/Home';
// import Search from '../Pages/Search.js';
// import Library from '../Pages/Library'

// const Tab = createBottomTabNavigator();

// export default function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Fav') {
//             iconName = focused ? 'heart' : 'heart-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#1a2a43',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: { backgroundColor: '#000' },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Tab.Screen name="Library" component={Library} options={{ headerShown: false }} />
//     </Tab.Navigator>
//   );
// }
