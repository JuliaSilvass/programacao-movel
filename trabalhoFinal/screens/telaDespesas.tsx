import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { getAllDespesas, deleteDespesa } from "../database/despesaService";
import { Despesa } from "../models/despesas";

export default function TelaDespesas({ navigation }) {
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  async function carregarDespesas() {
    try {
      const lista = await getAllDespesas();
      setDespesas(lista);
    } catch (error) {
      console.error('Erro ao carregar despesas:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarDespesas();
    });
    return unsubscribe;
  }, [navigation]);

  const excluirDespesa = async (id: number) => {
    Alert.alert('Confirmar', 'Deseja realmente excluir?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: async () => {
        await deleteDespesa(id);
        carregarDespesas();
      }}
    ]);
  };

  const renderItem = ({ item }: { item: Despesa }) => (
    <TouchableOpacity
      style={styles.itemAmbiente}
      onPress={() => navigation.navigate('EditarDespesa', { despesa: item })}
    >
      <Icon name={item.icone || 'home-outline'} size={30} color="#226473" />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.itemNome}>{item.nome}</Text>
          <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
          <Text style={styles.itemCategoria}>{item.categoria}</Text>
          <Text style={styles.itemData}>{item.data}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => excluirDespesa(item.id)} style={{ padding: 8 }}>
        <Icon name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={despesas}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma despesa cadastrada.</Text>}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('EditarDespesa')}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
