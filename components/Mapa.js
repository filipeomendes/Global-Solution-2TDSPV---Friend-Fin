import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useState, useRef } from 'react'

export default function Mapa() {

  const customMapStyleId = '8f373c562f714268';
  const [lista, setLista] = useState([]);
  const mapaRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      <MapView ref={mapaRef} style={{flex: 1}} initialCamera={{
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
          styleId: customMapStyleId
        }}
      onPress={(e)=>{
        console.log("Coordinate: ", e.nativeEvent.coordinate)
        console.log("Position: ", e.nativeEvent.position)
        const obj = {
          ... e.nativeEvent.coordinate,
          title: "Clique",
          description: "Descrição"
        }
        setLista( [ ...lista, obj ])
      }}
      >

        {lista.map( (item, index) => <Marker
        key={index}
        coordinate={{
          latitude: item.latitude, 
          longitude: item.longitude}}
        title={item.title}
        description={item.description}/>)}
      </MapView>
    </View>
  );
}