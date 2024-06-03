import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';

import Capa from '../assets/capa2.png';
import HummerHead from '../assets/hummerhead.png';

export default function Tubaroes() {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        <Image source={Capa} style={styles.capa} resizeMode='cover' />
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={styles.title}>Tubarões</Text>
        <Text style={styles.description}>
          Hoje cerca de 100 MILHÕES de tubarões são mortos por ano, em maioria para a pesca, gerando um desequilíbrio ambiental enorme. A nossa solução visa auxiliar os meios de fiscalização através de denúncias registradas de forma rápida e prática. Nossos usuários poderão reportar locais onde a carne de tubarão está sendo comercializada e áreas onde a pesca ilegal está ocorrendo. Vamos ajudar a conscientizar o público sobre a importância da preservação dos tubarões, fornecendo informações sobre várias espécies e seu papel nos ecossistemas.
        </Text>
        <View style={styles.especies}>
          <Text style={styles.title}>Tubarão-Martelo</Text>
          <View style={styles.imageContainer}>
            <Image source={HummerHead} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>Os tubarões-martelo são uma família de peixes cartilaginosos conhecidos por sua distinta cabeça em forma de "T", chamada cefalofólio. Esse formato lhes confere uma visão panorâmica, permitindo detectar presas e ameaças com maior eficácia. Vivem em águas tropicais e temperadas ao redor do mundo, e suas espécies variam em tamanho, desde o pequeno tubarão-martelo-bonnethead, que mede cerca de um metro, até o grande tubarão-martelo-gigante, que pode atingir mais de seis metros de comprimento. Eles se alimentam de uma variedade de presas, incluindo peixes, lulas e crustáceos, e são conhecidos por suas habilidades de navegação e migração. Apesar de serem temidos por muitos, os tubarões-martelo raramente representam uma ameaça para os humanos. No entanto, várias espécies estão em perigo devido à pesca excessiva e à destruição de seus habitats. </Text>
        </View>
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
    color: 'white'
  },
  imageContainer: {
    width: "100%",
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imgSharks: {
    width: "100%",
    height: "100%",
  },
  especies: {
    marginTop: 50
  }
});
