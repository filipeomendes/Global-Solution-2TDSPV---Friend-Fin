import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';

import Capa from '../assets/capa.png'

export default function Perfil() {

  return (
    <ScrollView style={styles.scroll}>
      <View>
        <Image source={Capa} style={styles.capa} resizeMode='cover' />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={styles.title}>Conheça o Projeto!</Text>
        <Text style={styles.description}>
          Hoje cerca de 100 MILHÕES de tubarões são mortos por ano, em maioria para a pesca, gerando um desequilíbrio ambiental enorme. A nossa solução visa auxiliar os meios de fiscalização através de denúncias registradas de forma rápida e prática. Nossos usuários poderão reportar locais onde a carne de tubarão está sendo comercializada e áreas onde a pesca ilegal está ocorrendo. Vamos ajudar a conscientizar o público sobre a importância da preservação dos tubarões, fornecendo informações sobre várias espécies e seu papel nos ecossistemas.
        </Text>
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
    marginVertical: 20,
    color: 'white'
  },
});