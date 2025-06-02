import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import styles from "../styles";


export default function telaMapa({ navigation }) {
    const locais = [
    { id: 1, nome: 'Padaria', latitude: -23.56, longitude: -46.64 },
    { id: 2, nome: 'Supermercado', latitude: -23.55, longitude: -46.63 }
  ];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.56,
          longitude: -46.64,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {locais.map(local => (
          <Marker
            key={local.id}
            coordinate={{ latitude: local.latitude, longitude: local.longitude }}
            title={local.nome}
          />
        ))}
      </MapView>
    </View>
  );
}
