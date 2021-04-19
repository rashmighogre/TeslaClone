import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import  CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from'./components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <Header/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
