import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';

import Capa from '../assets/capa2.png';
import HummerHead from '../assets/hummerhead.png';
import TubaraoBaleia from '../assets/tubarao-baleia.png';
import GalhaBranca from '../assets/galha-branca.png';
import Branco from '../assets/tubarao-branco.png';
import RaiaViola from '../assets/raia-viola.png';
import TubaraoTouro from '../assets/tubarao-touro.png';
import TubaraoLixa from '../assets/tubarao-lixa.png';
import TubaraoTigre from '../assets/tubarao-tigre.png';

export default function Tubaroes() {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        <Image source={Capa} style={styles.capa} resizeMode='cover' />
      </View>
      <View style={{ marginHorizontal: 30}}>
        <Text style={styles.title}>Tubarões</Text>
        <Text style={[styles.description, {marginBottom: 10}]}>
          Hoje cerca de 100 MILHÕES de tubarões são mortos por ano, em maioria para a pesca, gerando um desequilíbrio ambiental enorme. A nossa solução visa auxiliar os meios de fiscalização através de denúncias registradas de forma rápida e prática. Nossos usuários poderão reportar locais onde a carne de tubarão está sendo comercializada e áreas onde a pesca ilegal está ocorrendo. Vamos ajudar a conscientizar o público sobre a importância da preservação dos tubarões, fornecendo informações sobre várias espécies e seu papel nos ecossistemas.
        </Text>
        <View style={styles.curiosidade}>
          <Text style={styles.curiosidadeText1}>
            Você sabia que os tubões chegaram no planeta antes dos dinossauros?
          </Text>
          <Text style={styles.curiosidadeText2}>
            Os tubarões estão no Planeta Terra há cerca de 450 milhões, isso é aproximadamente 200 milhões de anos antes dos dinossauros!
          </Text>
        </View>
        <Text style={[styles.description, { marginTop: 30 }]}>
          Os tubarões frequentemente são retratados como criaturas ferozes e perigosas, mas é importante entender que os encontros entre tubarões e humanos são extremamente raros e, na maioria das vezes, resultam de um mal-entendido por parte dos tubarões, como quando um tubarão investiga algo que parece ser uma presa, como uma prancha de surfe ou um mergulhador. Primeiramente, é essencial reconhecer que os tubarões são animais selvagens que habitam os oceanos há milhões de anos. Como predadores de topo, desempenham um papel crucial na manutenção do equilíbrio dos ecossistemas marinhos, ajudando a regular as populações de outras espécies. São registrados mais de 1000 espécies de tubarões e raias no mundo.
        </Text>
        <View style={styles.separador} />
        <Text style={styles.title}>Conheça algumas espécies</Text>
        <View style={styles.especies}>
          <Text style={styles.especiesTubaroes}>Tubarão-Martelo-Liso</Text>
          <View style={styles.imageContainer}>
            <Image source={HummerHead} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>O tubarão-martelo-liso (Sphyrna zygaena) é conhecido por sua cabeça distintamente em forma de martelo, que lhe proporciona uma visão panorâmica e habilidades sensoriais aprimoradas. Este tubarão vive em águas temperadas e tropicais ao redor do mundo. Atualmente, está listado como vulnerável pela União Internacional para a Conservação da Natureza (IUCN). As principais ameaças ao tubarão-martelo-liso incluem a pesca excessiva, tanto comercial quanto recreativa, e a captura acidental em redes de pesca. Suas nadadeiras são especialmente valorizadas no comércio de sopa de barbatana de tubarão, levando à sobrepesca. Além disso, a destruição do habitat marinho e a poluição também contribuem para o declínio de sua população.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Baleia</Text>
          <View style={styles.imageContainer}>
            <Image source={TubaraoBaleia} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>O tubarão-baleia (Rhincodon typus) é o maior peixe do mundo, alcançando até 12 metros e mais de 20 toneladas. Apesar de seu tamanho, alimenta-se de plâncton e pequenos peixes. Está em perigo de extinção devido à pesca comercial e à degradação do habitat. A carne, nadadeiras e óleo são valorizados, contribuindo para a sobrepesca. Poluição e mudanças climáticas também afetam negativamente seu habitat. Esforços de conservação incluem áreas protegidas, regulamentações de pesca e iniciativas de sensibilização.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Galha-Branca-Oceânico</Text>
          <View style={styles.imageContainer}>
            <Image source={GalhaBranca} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>O tubarão-galha-branca-oceânico (Carcharhinus longimanus) é uma espécie amplamente distribuída nos oceanos tropicais e subtropicais, mas enfrenta sérios riscos de extinção. A pesca comercial desenfreada, a demanda por suas nadadeiras e a degradação do habitat marinho são as principais ameaças. A destruição de manguezais, recifes de coral e áreas de reprodução afeta negativamente a capacidade desses tubarões de se reproduzirem e se recuperarem. Medidas de conservação urgentes, como regulamentações de pesca mais rigorosas e a criação de áreas marinhas protegidas, são necessárias para garantir a sobrevivência dessa espécie e a saúde dos ecossistemas marinhos.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Raia-Viola Brasileira</Text>
          <View style={styles.imageContainer}>
            <Image source={RaiaViola} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>A Raia-Viola Brasileira (Rhinobatos horkelii) é uma espécie de raia que habita as águas costeiras do Brasil. Embora menos conhecida do que o tubarão-branco, também enfrenta ameaças significativas à sua sobrevivência. Classificada como vulnerável pela União Internacional para a Conservação da Natureza (IUCN), a Raia-Viola Brasileira está em risco de extinção devido a uma série de fatores. A principal ameaça para essa espécie é a pesca incidental, na qual as raias são capturadas acidentalmente em redes de pesca destinadas a outras espécies. Além disso, a degradação do habitat costeiro e a poluição marinha afetam negativamente a população dessa raia, reduzindo seu habitat e recursos alimentares.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Touro</Text>
          <View style={styles.imageContainer}>
            <Image source={TubaraoTouro} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>Carcharias taurus, mais conhecido como tubarão-touro, é uma espécie de tubarão amplamente distribuída em águas costeiras tropicais e temperadas ao redor do mundo. Apesar de sua adaptação a uma variedade de habitats marinhos, o tubarão-touro enfrenta sérias ameaças à sua sobrevivência, resultando em sua classificação como perígo crítico pela União Internacional para a Conservação da Natureza (IUCN). A pesca comercial e a captura incidental são as principais ameaças enfrentadas pelo tubarão-touro. Eles são frequentemente capturados em redes de pesca destinadas a outras espécies, resultando em altas taxas de mortalidade. Além disso, a degradação do habitat costeiro e a pesca recreativa também contribuem para a diminuição das populações dessa espécie.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Lixa</Text>
          <View style={styles.imageContainer}>
            <Image source={TubaraoLixa} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>Os tubarões-martelo são uma família de peixes cartilaginosos conhecidos por sua distinta cabeça em forma de "T", chamada cefalofólio. Esse formato lhes confere uma visão panorâmica, permitindo detectar presas e ameaças com maior eficácia. Vivem em águas tropicais e temperadas ao redor do mundo, e suas espécies variam em tamanho, desde o pequeno tubarão-martelo-bonnethead, que mede cerca de um metro, até o grande tubarão-martelo-gigante, que pode atingir mais de seis metros de comprimento. Eles se alimentam de uma variedade de presas, incluindo peixes, lulas e crustáceos, e são conhecidos por suas habilidades de navegação e migração. Apesar de serem temidos por muitos, os tubarões-martelo raramente representam uma ameaça para os humanos. No entanto, várias espécies estão em perigo devido à pesca excessiva e à destruição de seus habitats. </Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Tigre</Text>
          <View style={styles.imageContainer}>
            <Image source={TubaraoTigre} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>O tubarão-tigre (Galeocerdo cuvier) é uma espécie amplamente reconhecida e temida dos oceanos tropicais e subtropicais em todo o mundo. Nomeado por suas listras escuras que se assemelham às de um tigre, este tubarão é conhecido por sua natureza agressiva e sua adaptabilidade a uma variedade de habitats marinhos. Apesar de sua robustez, o tubarão-tigre enfrenta uma série de ameaças à sua sobrevivência. A pesca comercial e recreativa representa uma ameaça significativa para esses tubarões, que são frequentemente capturados como captura acessória em redes de pesca destinadas a outras espécies. Além disso, a degradação do habitat marinho, como recifes de coral e manguezais, devido à atividade humana, e a poluição marinha também afetam negativamente as populações de tubarões-tigre. Outro desafio é a demanda por suas barbatanas, carne e óleo. Embora não tão visado quanto algumas outras espécies de tubarões, o tubarão-tigre ainda é capturado para atender à demanda por produtos derivados, contribuindo para a pressão sobre suas populações.</Text>
          <View style={styles.separador} />
          <Text style={styles.especiesTubaroes}>Tubarão-Branco</Text>
          <View style={styles.imageContainer}>
            <Image source={Branco} style={styles.imgSharks} resizeMode='cover'/>
          </View>
          <Text style={styles.description}>E não poderiamos deixar de mencionar o rei dos mares, o tubarão-branco (Carcharodon carcharias). É uma das espécies de tubarões mais emblemáticas e amplamente reconhecidas. Conhecido por sua impressionante aparência e reputação como predador de topo dos oceanos, o tubarão-branco desempenha um papel crucial nos ecossistemas marinhos. Apesar de sua notoriedade, o tubarão-branco enfrenta sérias ameaças à sua sobrevivência. Classificado como uma espécie vulnerável à extinção pela União Internacional para a Conservação da Natureza (IUCN), o tubarão-branco é afetado por uma série de fatores que contribuem para seu risco de extinção. Entre as principais causas de vulnerabilidade do tubarão-branco estão a sobrepesca e a captura acidental em redes de pesca, a degradação do habitat marinho devido à atividade humana, as mudanças climáticas e a perda de presas devido à pesca excessiva de suas fontes alimentares. Além disso, o tubarão-branco é frequentemente alvo de pesca recreativa e comercial, muitas vezes visando suas barbatanas e outros produtos derivados. </Text>
        </View>
        <View style={styles.separador} />
        <View style={[styles.curiosidade, { marginBottom: 30 }]}>
          <Text style={styles.curiosidadeText1}>
          Essas são apenas algumas espécies de tubarões ameaçados.
          </Text>
          <Text style={styles.curiosidadeText2}>
          Confira essas e muitas outras em no site oficial da IUCN (https://www.iucnredlist.org)
          </Text>
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
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
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
  especiesTubaroes: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  separador: {
    borderBottomColor: '#8f8f8f',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  curiosidade: {
    backgroundColor: '#d3e6f0',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20
  },
  curiosidadeText1: {
    color:'#2750d9',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  curiosidadeText2: {
    color:'#000f40',
  },
});
