import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

import CapaPesca from '../assets/capa-pesca.jpg';
import PescaImg from '../assets/tubaroes-pesca.jpg';
import Finning from '../assets/finning.jpg';
import Finning2 from '../assets/finning2.jpg'

export default function Pesca() {

  const [contador, setContador] = useState(0);
  const contadorAlvo = useRef(0);

  useEffect(() => {
    const dataInicial = new Date('2024-01-01T00:01:00');

    const momento = new Date();
    const percorrido = (momento - dataInicial) / 1000;

    contadorAlvo .current = percorrido * 3.05;
    setContador(Math.floor(contadorAlvo .current));

    const interval = setInterval(() => {
      contadorAlvo .current += 3.05;
      setContador(Math.floor(contadorAlvo .current));
    });

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contador < Math.floor(contadorAlvo .current)) {
        setContador(prev => prev + 1);
      }
    },100);

    return () => clearInterval(interval);
  }, [contador]);

  return (
    <ScrollView style={styles.scroll}>
        <View>
            <Image source={CapaPesca} style={styles.capa} resizeMethod='auto' resizeMode='center'/>
        </View>
        <View style={{marginHorizontal: 30}}>
            <Text style={styles.title}>Pesca Excessiva</Text>
            <View style={styles.viewContador}>
              <Text style={styles.descriptionContador}>O número abaixo representa a quantidade aproximada de tubarões que foram mortos em 2024 até o momento</Text>
              <View style={styles.contador}>
                <Text style={styles.contadorTexto}>{contador.toLocaleString()}</Text>
                {/* <Text style={styles.contadorTexto}>41.923.213</Text> */}
              </View>
            </View>
            <Text style={styles.description}>Em junho de 2023, o Ibama apreendeu 28,7 mil toneladas de barbatanas de tubarão, sendo esta a maior apreensão do tipo no mundo. As barbatanas seriam exportadas ilegalmente para a Ásia, e para produzi-las, estima-se que 10 mil tubarões foram mortos, incluindo 4,4 mil tubarões-azuis e 5,6 mil da espécie anequim, ameaçada de extinção. Entre 2003 e 2020, o Brasil exportou 1.228 toneladas de barbatanas de tubarão, uma quantidade pequena em comparação aos 188 mil toneladas importadas pelos três principais mercados asiáticos no mesmo período. A apreensão em 2023 chamou atenção pelo volume e pelos indícios de que empresários da pesca estariam desrespeitando a legislação, focando em espécies cuja pesca industrial é proibida.</Text>
            <View style={styles.imageContainer}>
              <Image source={PescaImg} style={styles.imgSharks} resizeMode='cover'/>
            </View>
            <Text style={styles.description}>Estima-se que 11 mil tubarões são mortos por hora, cerca de 100 milhões por ano em todo o mundo. Essa pesca é impulsionada principalmente pela demanda por barbatanas de tubarão, que são um ingrediente valorizado em sopas e outros pratos na culinária asiática. As barbatanas de tubarão são altamente valorizadas no mercado, levando pescadores a capturarem tubarões, cortarem suas barbatanas e, frequentemente, jogarem os corpos mutilados de volta ao mar, onde os tubarões morrem. Isso contribui significativamente para a rápida diminuição das populações de tubarões em todo o mundo, colocando várias espécies em risco de extinção e desequilibrando os ecossistemas marinhos.</Text>
            <View style={styles.imageContainer}>
              <Image source={Finning} style={styles.imgSharks} resizeMode='cover'/>
            </View>
            <View style={styles.curiosidade}>
              <Text style={styles.curiosidadeText1}>
                Você sabe o que é 'Finning'?
              </Text>
              <Text style={styles.curiosidadeText2}>
              O finning é uma prática cruel e insustentável na pesca de tubarão, que envolve a captura dos tubarões, a remoção de suas barbatanas e o descarte dos corpos mutilados de volta ao mar, muitas vezes ainda vivos. As barbatanas, altamente valorizadas no mercado asiático para a preparação de sopa de barbatana de tubarão, muitas vezes são a única parte aproveitada, enquanto o resto do tubarão, incapaz de nadar sem suas barbatanas, afunda e morre lentamente.</Text>
            </View>
            <Text style={styles.description}>A pesca de tubarão é uma atividade que tem gerado preocupações significativas em todo o mundo devido ao seu impacto ambiental e às práticas muitas vezes ilegais e insustentáveis envolvidas. Tubarões desempenham um papel crucial nos ecossistemas marinhos, ajudando a manter o equilíbrio das populações de outras espécies e a saúde geral dos oceanos. No entanto, a pesca excessiva e a prática específica de remoção de barbatanas de tubarão (finning) têm levado várias espécies à beira da extinção.</Text>
            <View style={styles.imageContainer}>
              <Image source={Finning2} style={styles.imgSharks} resizeMode='cover'/>
            </View>
            <View style={styles.separador} />
            <Text style={styles.title}>Cação é Tubarão</Text>
            <Text style={styles.description}>O Brasil, conhecido por sua rica biodiversidade marinha, carrega um título alarmante: é o maior consumidor e importador de carne de tubarão do mundo. Este fato surpreendente é ainda mais preocupante devido à falta de conhecimento da população brasileira, que consome carne de tubarão sob o nome de "cação". Esta prática contribui diretamente para a matança desenfreada de tubarões, uma questão que a Sea Shepherd Brasil está determinada a combater com sua campanha "Cação é Tubarão".</Text>
            <Text style={styles.description}>A Sea Shepherd Brasil, uma organização dedicada à conservação marinha, destaca que as indústrias de comércio de barbatana de tubarão têm utilizado o Brasil como uma espécie de "lavanderia" para legalizar suas práticas insustentáveis. A sobrepesca e o comércio ilegal de barbatanas têm levado a reduções populacionais irreversíveis de tubarões e raias nos últimos anos.</Text>
            <Text style={[styles.description, {marginBottom: 30}]}>A campanha "Cação é Tubarão" da Sea Shepherd Brasil visa aumentar a conscientização sobre este problema, educando o público sobre a verdadeira origem da carne de "cação" e promovendo a necessidade de rotulagem adequada para proteger as espécies marinhas ameaçadas. Veja mais em https://seashepherd.org.br/cacao-e-tubarao/</Text>
        </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    capa: {
      width: "100%",
      height: 221
    },
    scroll: {
      flex: 1,
      backgroundColor: "#07244a"
    },
    main: {
      flex: 9,
      display: "flex",
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
    descriptionContador: {
      fontSize: 19,
      fontWeight: '500',
      marginTop: 10,
    },
    contador: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 10,
    },
    contadorTexto: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#ff1f4b',
    },
    viewContador: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      padding: 11,
      marginVertical: 20
    },
    imageContainer: {
      width: "100%",
      height: 200,
      alignSelf: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      margin: 20,
    },
    imgSharks: {
      width: "100%",
      height: "100%",
    },
    curiosidade: {
      backgroundColor: '#d3e6f0',
      marginVertical: 20,
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
    separador: {
      borderBottomColor: '#8f8f8f',
      borderBottomWidth: 1,
      marginVertical: 20,
    },
  });