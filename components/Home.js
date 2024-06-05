import React, { useRef } from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Capa from '../assets/capa.png';
import Carrossel1 from '../assets/carrossel1.png';
import Carrossel2 from '../assets/carrossel2.png';
import Carrossel3 from '../assets/carrossel3.png';
import Carrossel4 from '../assets/carrossel4.png';
import Carrossel5 from '../assets/carrossel5.png';

export default function Home() {
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToTubaroes = () => {
    navigation.navigate('Tubaroes');
  };

  const navigateToPesca = () => {
    navigation.navigate('Pesca');
  };

  const navigateToMapa = () => {
    navigation.navigate('Mapa');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const scrollToSobreNos = () => {
    scrollViewRef.current.scrollTo({ y: 850, animated: true });
  };

  return (
    <ScrollView style={styles.scroll} ref={scrollViewRef}>
      <View>
        <Image source={Capa} style={styles.capa} resizeMode='cover' />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={styles.title}>Conheça o Projeto!</Text>
        <Text style={styles.description}>
          Hoje cerca de 100 MILHÕES de tubarões são mortos por ano, em maioria para a pesca, gerando um desequilíbrio ambiental enorme. A nossa solução visa auxiliar os meios de fiscalização através de denúncias registradas de forma rápida e prática. Nossos usuários poderão reportar locais onde a carne de tubarão está sendo comercializada e áreas onde a pesca ilegal está ocorrendo. Vamos ajudar a conscientizar o público sobre a importância da preservação dos tubarões, fornecendo informações sobre várias espécies e seu papel nos ecossistemas.
        </Text>
      </View>
      <ScrollView style={styles.carrossel} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={scrollToSobreNos}>
          <View>
            <Image source={Carrossel1} style={styles.imgCarrossel} resizeMode='cover' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToTubaroes}>
          <View>
            <Image source={Carrossel2} style={styles.imgCarrossel} resizeMode='cover' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToPesca}>
          <View>
            <Image source={Carrossel3} style={styles.imgCarrossel} resizeMode='cover' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMapa}>
          <View>
            <Image source={Carrossel4} style={styles.imgCarrossel} resizeMode='cover' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLogin}>
          <View>
            <Image source={Carrossel5} style={styles.imgCarrossel} resizeMode='cover' />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.sobreNos}>
        <Text style={styles.description}>
          O nosso projeto visa combater a pesca ilegal por meio do registro de denúncias utilizando a API do Google Maps, juntamente com um sistema de monitoramento em dashboards das fiscalizações e ocorrências. Os usuários podem reportar atividades suspeitas fornecendo informações de localização precisa.
        </Text>
        <Text style={styles.description}>
          As autoridades responsáveis têm acesso a dashboards em tempo real, permitindo uma resposta rápida e eficiente. Além disso, o dashboard utilizado pelas autoridades mostra as operações e regiões fiscalizadas no mapa, oferecendo uma visão abrangente das áreas de maior atividade suspeita e permitindo uma alocação mais eficiente dos recursos de fiscalização. A análise dos dados coletados pode identificar padrões de atividades ilegais, áreas de maior incidência e comportamentos suspeitos.
        </Text>
        <Text style={styles.description}>
          Nosso sistema tem como objetivo principal combater a pesca ilegal e promover a proteção dos nossos amigos de barbatana, proporcionando uma plataforma eficiente para o registro de denúncias, monitoramento das fiscalizações e análise de dados.
        </Text>
        <Text style={[styles.title, { marginBottom: 40, marginTop: 20 }]}>Ajude a Proteger as Barbatanas!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  capa: {
    width: '100%',
    height: 221,
  },
  scroll: {
    flex: 1,
    backgroundColor: "#07244a"
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white'
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    color: 'white'
  },
  imgCarrossel: {
    width: 200,
    height: 300,
    marginHorizontal: 10,
    borderRadius: 10
  },
  carrossel: {
    marginBottom: 30,
    marginTop: 30
  },
  sobreNos:{
    marginHorizontal: 30
  }
});
