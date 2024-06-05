import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tubaroes from './Tubaroes';
import Pesca from './Pesca';
import Mapa from './Mapa';
import Perfil from './Perfil';
import Denuncia from './Denuncia';
import Login from './Login';
import Cadastro from './Cadastro';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Tubaroes" component={Tubaroes} />
      <Stack.Screen name="Pesca" component={Pesca} />
      <Stack.Screen name="Mapa" component={Mapa} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Denuncia" component={Denuncia} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
