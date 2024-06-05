import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Denuncia() {
  const route = useRoute();
  const { latitude, longitude } = route.params;
  const navigation = useNavigation();

  const [descricao, setDescricao] = useState("");

  const enviarDenuncia = async () => {
    try {
      const response = await axios.post('https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias', {
        latitude: latitude,
        longitude: longitude,
        descricao: descricao
      });
      if (response.status === 200) {
        Alert.alert(
          "Sucesso!",
          "Muito obrigado por denunciar, nós e os tubarões agradecemos! Você será redirecionado para a tela principal",
          [{ text: "OK", onPress: () => navigation.navigate('Home') }]
        );
        setTimeout(() => {
          navigation.navigate('Home');
        }, 3000);
      } else {
        throw new Error('Erro ao enviar denúncia');
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao enviar a denúncia. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Latitude: {latitude}</Text>
      <Text style={styles.texto}>Longitude: {longitude}</Text>
      <Text style={styles.textoForm}>Descrição:</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
        value={descricao}
        onChangeText={setDescricao}
        maxLength={100}
        multiline={true}
        placeholder="Digite a descrição (máx. 100 caracteres)" />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={enviarDenuncia} />
      </View>
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
    fontSize: 16,
    marginBottom: 8,
    color: '#FFF',
    fontWeight: 'bold'
  },
  textoForm: {
    fontSize: 20,
    marginBottom: 8,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 50,
    borderRadius: 4,
    backgroundColor: '#fff',
    textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 16,
  },
});
