// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MainNavigator from './MainNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <MainNavigator />
    </>
  );
}
