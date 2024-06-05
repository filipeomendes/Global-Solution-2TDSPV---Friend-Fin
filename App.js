import { StyleSheet, Image, View, DrawerLayoutAndroid, TouchableOpacity, Dimensions, Text} from 'react-native';
import React, { useState, useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LogoImg from './assets/logo.png'
import MenuIcon from './assets/onda.png'
import HomeIcon from './assets/home.png'
import DenunciaIcon from './assets/denuncia.png'
import UserImg from './assets/user.png'

import HomeStack from './components/HomeStack';
import Mapa from './components/Mapa';
import Perfil from './components/Perfil';
import Login from './components/Login'
import Tubaroes from './components/Tubaroes';
import Pesca from './components/Pesca';

const Tab = createBottomTabNavigator();

export default function App() {

  const drawerRef = React.useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  // const navigation = useNavigation();

  // const navigateToHome = () => {
  //   navigation.navigate('Home');
  // };

  // const navigateToTubaroes = () => {
  //   navigation.navigate('Tubaroes');
  // };

  // const navigateToPesca = () => {
  //   navigation.navigate('Pesca');
  // };

  // const navigateToMapa = () => {
  //   navigation.navigate('Mapa');
  // };

  // const navigateToPerfil = () => {
  //   navigation.navigate('Perfil');
  // };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={0.8 * Dimensions.get('window').width}
      drawerPosition={'right'}
      renderNavigationView={() => (
        <View style={styles.drawer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuItemTexto}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuItemTexto}>Sobre o Projeto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuItemTexto}>Sobre Tubarões</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuItemTexto}>Pesca e Exploração</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuItemTexto}>Faça uma denúnica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(Perfil)}>
            <Text style={styles.menuItemTexto}>Login/Cadastro</Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={LogoImg} style={styles.logo} resizeMethod='auto' resizeMode='center'/>
          <TouchableOpacity onPress={openDrawer} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
            <Image source={MenuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image source={HomeIcon} style={{ width: size, height: size, tintColor: color }}/>
                ),
              }}
            />
            <Tab.Screen
              name="Denúncia"
              component={Mapa}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image source={DenunciaIcon} style={{ width: size, height: size, tintColor: color }}/>
                ),
              }}
            />
            <Tab.Screen
              name="Login"
              component={Login}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image source={UserImg} style={{ width: size, height: size, tintColor: color }}/>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: "10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  menuIcon: {
    width:35,
    height: 35,
    marginLeft: 20,
    marginTop: 20
  },
  capa: {
    width: "100%",
    height: 221
  },
  logo: {
    width: 100,
    marginTop: 20
  },
  scroll: {
    flex: 1,
  },
  mapa: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 9,
    display: "flex",
    backgroundColor: "#002142"
  },
  drawer: {
    flex: 1,
    backgroundColor: '#2366b8',
    paddingTop: 30
  },
  menuItem: {
    marginLeft: 80,
  },
  menuItemTexto: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
});