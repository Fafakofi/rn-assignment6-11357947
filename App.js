import React, { useState } from 'react';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

