import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Speech from 'expo-speech';


export default function TelaMetas({ navigation }) {
  const [metas, setMetas] = useState([
    { id: '1', nome: 'Economizar para Viagem', valor: 5000, categoria: 'Viagem', dataLimite: '2025-12-31', icone: 'airplane-outline', status: 'ativa', ambiente: 'Casa' },
    { id: '2', nome: 'Comprar Carro Novo', valor: 30000, categoria: 'Transporte', dataLimite: '2026-06-30', icone: 'car-outline', status: 'ativa', ambiente: 'Casa' },
    { id: '3', nome: 'Estudar para Concurso', valor: 2000, categoria: 'Educação', dataLimite: '2025-08-15', icone: 'school-outline', status: 'ativa', ambiente: 'Casa' },
    { id: '4', nome: 'Reforma da Casa', valor: 15000, categoria: 'Casa', dataLimite: '2025-11-01', icone: 'home-outline', status: 'ativa', ambiente: 'Casa' },
  ]);

  const editarMeta = (metaEditada) => {
    setMetas(prevMetas =>
      prevMetas.map(meta =>
        meta.id === metaEditada.id ? metaEditada : meta
      )
    );
  }

  const excluirMeta = (id) => {
    setMetas(metas.filter(meta => meta.id !== id));
  }

  const addMeta = (nomeMeta, iconeMeta, valor, categoria, dataLimite, ambiente, status) => {
    setMetas([...metas, {
      id: Date.now().toString(),
      nome: nomeMeta || 'Nova Meta',
      valor: valor || 0,
      categoria: categoria || 'Outros',
      dataLimite: dataLimite || new Date().toISOString().split('T')[0],
      icone: iconeMeta || 'star-outline',
      status: status || 'ativa',
      ambiente: ambiente || 'Casa',
    }]);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemAmbiente}
      onPress={() => navigation.navigate('EditarMeta', {
        meta: item,
        onSalvar: editarMeta,
        onExcluir: excluirMeta
      })}
    >
      <Icon name={item.icone} size={30} color="#226473" />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.itemNome}>{item.nome}</Text>
          <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
          <Text style={styles.itemCategoria}>{item.categoria}</Text>
          <Text style={styles.itemData}>{item.dataLimite}</Text>
        </View>
        <TouchableOpacity onPress={() => falarMeta(item)} style={{ marginTop: 5 }}>
          <Text style={{ color: '#226473' }}>🔊 Ouvir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  function falarMeta(meta) {
    const texto = `${meta.nome}, categoria: ${meta.categoria}, valor: ${meta.valor} reais, até: ${meta.dataLimite}`;
    Speech.speak(texto);
  }

  return (
    <View style={styles.container}>
      <FlatList data={metas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (<Text style={styles.emptyListText}>Nenhuma meta cadastrada.</Text>)}
      />
      <TouchableOpacity style={styles.fab} onPress={() => addMeta('Nova Meta', 'star-outline')}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

