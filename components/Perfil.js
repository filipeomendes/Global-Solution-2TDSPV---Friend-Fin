import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Modal, TouchableOpacity, Image, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LixeiraIcon from '../assets/lixeira.png';
import EditarIcon from '../assets/editar.png';

export default function Perfil() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null); 
  const [denuncias, setDenuncias] = useState([]);
  const [edicao, setEdicao] = useState(false);
  const [edicaoCadastro, setEdicaoCadastro] = useState(false);
  const [currentDenuncia, setCurrentDenuncia] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [newNome, setNewNome] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCpf, setNewCpf] = useState("");
  const [newRg, setNewRg] = useState("");
  const [newDdd, setNewDdd] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const [newSenha, setNewSenha] = useState("");
  const [newDtNascimento, setNewDtNascimento] = useState("");

  const fetchDenuncias = async () => {
    try {
      const response = await axios.get('https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias');
      setDenuncias(response.data);
    } catch (error) {
      console.error("Erro ao buscar as denúncias:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario');
      if (usuario) {
        const response = await axios.get('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/usuario', {
          params: { usuario }
        });
        setUser(response.data);
        setUserName(response.data.nome);
        setNewNome(response.data.nome);
        setNewEmail(response.data.email);
        setNewCpf(response.data.cpf);
        setNewRg(response.data.rg);
        setNewDdd(response.data.ddd);
        setNewTelefone(response.data.telefone);
        setNewSenha(response.data.senha);
        setNewDtNascimento(response.data.dtNascimento);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  };

  const handleEditDenuncia = (denuncia) => {
    setEdicao(true);
    setCurrentDenuncia(denuncia);
    setDescricao(denuncia.descricao);
  };

  const handleUpdateDenuncia = async () => {
    try {
      await axios.put(`https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias/${currentDenuncia.id}`, {
        descricao
      });
      fetchDenuncias();
      setEdicao(false);
      setCurrentDenuncia(null);
      setDescricao("");
    } catch (error) {
      console.error("Erro ao atualizar a denúncia:", error);
    }
  };

  const handleDeleteDenuncia = async (id) => {
    try {
      await axios.delete(`https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias/${id}`);
      fetchDenuncias();
    } catch (error) {
      console.error("Erro ao deletar a denúncia:", error);
    }
  };

  const handleEditarCadastro = () => {
    setEdicaoCadastro(true);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/usuarios/${user.id}`, {
        nome: newNome,
        email: newEmail,
        cpf: newCpf,
        rg: newRg,
        ddd: newDdd,
        telefone: newTelefone,
        senha: newSenha,
        dtNascimento: newDtNascimento
      });
      await AsyncStorage.setItem('usuario', newEmail);
      setEdicaoCadastro(false);
      fetchUserData();
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    fetchDenuncias();
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, {userName}</Text>
      <Button title="Editar Cadastro" onPress={handleEditarCadastro} />
      <Text style={styles.subtitulo}>Minhas denúncias:</Text>
      <FlatList
        data={denuncias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Latitude: {item.latitude}</Text>
            <Text>Longitude: {item.longitude}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <View style={styles.funcoesLista}>
              <TouchableOpacity onPress={() => handleEditDenuncia(item)}>
                <Image source={EditarIcon} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteDenuncia(item.id)}>
                <Image source={LixeiraIcon} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {edicao && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={edicao}
          onRequestClose={() => setEdicao(false)}
        >
          <View style={styles.viewEditar}>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
              placeholder="Descrição"
            />
            <TouchableOpacity onPress={handleUpdateDenuncia}>
              <Text style={styles.button}>Atualizar Descrição</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEdicao(false)}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      {edicaoCadastro && user && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={edicaoCadastro}
          onRequestClose={() => setEdicaoCadastro(false)}
        >
          <View style={styles.viewEditar}>
            <TextInput
              style={styles.input}
              value={newNome}
              onChangeText={setNewNome}
              placeholder="Nome"
            />
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={newCpf}
              onChangeText={setNewCpf}
              placeholder="CPF"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              value={newRg}
              onChangeText={setNewRg}
              placeholder="RG"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              value={newDdd}
              onChangeText={setNewDdd}
              placeholder="DDD"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              value={newTelefone}
              onChangeText={setNewTelefone}
              placeholder="Telefone"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={newSenha}
              onChangeText={setNewSenha}
              placeholder="Senha"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={newDtNascimento}
              onChangeText={setNewDtNascimento}
              placeholder="Data de Nascimento"
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleUpdateUser}>
              <Text style={styles.button}>Atualizar Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEdicaoCadastro(false)}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
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
  },
  funcoesLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  viewEditar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    marginBottom: 16
  },
  icon: {
    width: 24,
    height: 24
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 4,
    marginVertical: 8,
    color: '#FFF',
    textAlign: 'center',
    width: 200,
    fontWeight: 'bold',
    fontSize: 18
  }
});
