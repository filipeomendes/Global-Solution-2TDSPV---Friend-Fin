import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Mapa() {
  const customMapStyleId = '8f373c562f714268';
  const [marcador, setMarcador] = useState(null);
  const mapaRef = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapaRef}
        style={{ flex: 1 }}
        initialCamera={{
          center: {
            latitude: -18.769,
            longitude: -42.599,
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 4.5,
        }}
        customMapStyle={{
          styleId: customMapStyleId,
        }}
        onPress={(e) => {
          console.log("Coordinate: ", e.nativeEvent.coordinate)
          const obj = {
            ...e.nativeEvent.coordinate,
          };
          setMarcador(obj);
        }}
      >
        {marcador && (
          <Marker
            coordinate={{
              latitude: marcador.latitude,
              longitude: marcador.longitude,
            }}
          />
        )}
      </MapView>
      {marcador && (
        <View style={styles.buttonContainer}>
          <Button
            title="Denunciar"
            onPress={() => navigation.navigate('Denuncia', { latitude: marcador.latitude, longitude: marcador.longitude })}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
