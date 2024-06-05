import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [userName, setUserName] = useState("");
  const [denuncias, setDenuncias] = useState([]);

  const fetchDenuncias = async () => {
    try {
      const response = await axios.get('https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias');
      setDenuncias(response.data);
    } catch (error) {
      console.error("Erro ao buscar as denúncias:", error);
    }
  };

  const fetchUserName = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario');
      if (usuario) {
        const response = await axios.get('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/usuario', {
          params: { usuario }
        });
        setUserName(response.data.nome);
      }
    } catch (error) {
      console.error("Erro ao buscar o nome do usuário:", error);
    }
  };

  useEffect(() => {
    fetchDenuncias();
    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, {userName}</Text>
      <Text style={styles.subtitulo}>Minhas denúncias:</Text>
      <FlatList
        data={denuncias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Latitude: {item.latitude}</Text>
            <Text>Longitude: {item.longitude}</Text>
            <Text>Descrição: {item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: "#07244a"
  },
  texto: {
    fontSize: 24,
    marginBottom: 16,
    color: '#FFF',
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 8,
    color: '#FFF',
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 4
  }
});
