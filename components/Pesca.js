import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useState, useRef } from 'react'

import Capa from '../assets/capa.png'

export default function Pesca() {

  return (
    <ScrollView style={styles.scroll}>
        <View>
            <Image source={Capa} style={styles.capa} resizeMethod='auto' resizeMode='center'/>
        </View>
        <View style={{marginHorizontal: 30}}>
            <Text style={styles.title}>Pesca</Text>
            <Text style={{  fontSize: 16,
                            fontWeight: '500',
                            marginVertical: 20
            }}>
                
            </Text>
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
    },
    main: {
      flex: 9,
      display: "flex",
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center'
    }
  });