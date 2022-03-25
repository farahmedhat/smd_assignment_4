import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ListUniversities from './screens/ListUniversities';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="MapScreen" 
        component={MapScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
      <Stack.Screen 
        name="ListUniversities" 
        component={ListUniversities}
        options={{
          headerShown: true,  
        }} 
      />
    </Stack.Navigator>
    
  </NavigationContainer>
);
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: 50
  },
  btn : {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;