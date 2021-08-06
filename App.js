import React from 'react';
import {
   StyleSheet,
    Text,
    SafeAreaView 
  } from 'react-native';
import { HomeScreen } from './src/screens';

export default function App() {
  return (
    <SafeAreaView style={{flex:1, justifyContent:"center"}}>
      <HomeScreen/>
    </SafeAreaView>
  );
}
