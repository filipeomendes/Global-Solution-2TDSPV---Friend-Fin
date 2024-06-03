import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tubaroes from './Tubaroes';
import Pesca from './Pesca';
import Mapa from './Mapa';
import Perfil from './Perfil';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Tubaroes" component={Tubaroes} />
      <Stack.Screen name="Pesca" component={Pesca} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
