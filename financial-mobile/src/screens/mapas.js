import React from "react";
import { View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import styles from "../styles";

// Dados de despesas
export const despesas = [
  { 
    id: '1', nome: 'Alimentação', valor: 120, categoria: 'Alimentação', 
    data: '2025-05-30', icone: 'fast-food-outline', 
    coordenada: { latitude: -23.56, longitude: -46.64 }, 
    idAmbiente: '1' 
  },
  { 
    id: '2', nome: 'Transporte', valor: 200, categoria: 'Transporte', 
    data: '2025-05-29', icone: 'car-outline', 
    coordenada: { latitude: -23.55, longitude: -46.63 }, 
    idAmbiente: '2' 
  },
  { 
    id: '3', nome: 'Saúde', valor: 150, categoria: 'Saúde', 
    data: '2025-05-28', icone: 'medkit-outline', 
    coordenada: { latitude: -23.561, longitude: -46.641 }, 
    idAmbiente: '1' 
  },
  { 
    id: '4', nome: 'Educação', valor: 300, categoria: 'Educação', 
    data: '2025-05-27', icone: 'school-outline', 
    coordenada: { latitude: -23.54, longitude: -46.62 }, 
    idAmbiente: '3' 
  },
  { 
    id: '5', nome: 'Instrumentos', valor: 1500, categoria: 'Equipamentos', 
    data: '2025-05-25', icone: 'musical-notes-outline', 
    coordenada: { latitude: -23.53, longitude: -46.61 }, 
    idAmbiente: '4' 
  }
];

export default function TelaMapa({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.56,
          longitude: -46.64,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,  
        }}
      >
        {despesas.map((despesa) => (
          <Marker
            key={despesa.id}
            coordinate={despesa.coordenada}
            title={despesa.nome}
            description={`Categoria: ${despesa.category || despesa.categoria} | Valor: R$${despesa.valor}`}
          />
        ))}
      </MapView>
    </View>
  );
}