import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [ddd, setDdd] = useState("");
  const [telefone, setTelefone] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/cadastro', {
        nome,
        email,
        cpf,
        rg,
        ddd,
        telefone,
        usuario,
        senha,
        dtNascimento
      });

      if (response.status === 201) {
        Alert.alert("Cadastro realizado com sucesso!");
        navigation.navigate('Login');
      } else {
        throw new Error('Erro ao cadastrar. Por favor, tente novamente.');
      }
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="CPF"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={rg}
        onChangeText={setRg}
        placeholder="RG"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={ddd}
        onChangeText={setDdd}
        placeholder="DDD"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
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
      <TextInput
        style={styles.input}
        value={dtNascimento}
        onChangeText={setDtNascimento}
        placeholder="Data de Nascimento"
        keyboardType="numeric"
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
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
});
