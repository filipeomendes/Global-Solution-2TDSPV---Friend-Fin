import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/login', {
        usuario,
        senha
      });
      if (response.status === 200) {
        setError("");
        await AsyncStorage.setItem('usuario', usuario);
        navigation.navigate('Perfil');
      }
    } catch (error) {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Login</Text>
      <TextInput
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem conta? Clique aqui!</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  link: {
    color: '#FFF',
    textDecorationLine: 'underline',
    marginTop: 16
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16
  }
});
