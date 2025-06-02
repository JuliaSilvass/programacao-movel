import React, { use, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/Ionicons';

export default function telaDespesas({ navigation }) {

  const [despesas, setDespesas] = useState([
    {
      id: '1', nome: 'Alimentação', valor: 120, categoria: 'Alimentação',
      data: '2025-05-30', icone: 'fast-food-outline',
      coordenada: { latitude: -23.56, longitude: -46.64 },
      idAmbiente: 'Casa'
    },
    {
      id: '2', nome: 'Transporte', valor: 200, categoria: 'Transporte',
      data: '2025-05-29', icone: 'car-outline',
      coordenada: { latitude: -23.55, longitude: -46.63 },
      idAmbiente: 'Trabalho'
    },
    {
      id: '3', nome: 'Saúde', valor: 150, categoria: 'Saúde',
      data: '2025-05-28', icone: 'medkit-outline',
      coordenada: { latitude: -23.561, longitude: -46.641 },
      idAmbiente: 'Casa'
    },
    {
      id: '4', nome: 'Educação', valor: 300, categoria: 'Educação',
      data: '2025-05-27', icone: 'school-outline',
      coordenada: { latitude: -23.54, longitude: -46.62 },
      idAmbiente: 'Escritório'
    },
    {
      id: '5', nome: 'Instrumentos', valor: 1500, categoria: 'Equipamentos',
      data: '2025-05-25', icone: 'musical-notes-outline',
      coordenada: { latitude: -23.53, longitude: -46.61 },
      idAmbiente: 'Estúdio'
    }
  ]);

  const editarDespesa = (despesaEditada) => {
    setDespesas(prevDespesas =>
      prevDespesas.map(despesa =>
        despesa.id === despesaEditada.id ? despesaEditada : despesa
      )
    );
  }
  const excluirDespesa = (id) => {
    setDespesas(despesas.filter(despesa => despesa.id !== id));
  }

  const addDespesa = (nomeDespesa, iconeDespesa, valor, categoria, ambiente) => {
    setDespesas([...despesas, {
      id: Date.now().toString(),
      nome: nomeDespesa || 'Nova Despesa',
      valor: valor || 0,
      categoria: categoria || 'Outros',
      data: new Date().toISOString().split('T')[0],
      icone: iconeDespesa || 'home-outline',
      idAmbiente: ambiente || 'Casa',  
      coordenada: { latitude: -23.56, longitude: -46.64 }  
    }]);
  }


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemAmbiente}
      onPress={() => navigation.navigate('EditarDespesa', {
        despesa: item,
        onSalvar: editarDespesa,
        onExcluir: excluirDespesa
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
          <Text style={styles.itemData}>{item.data}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={despesas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum despesa cadastrada.</Text>}
      />
      <TouchableOpacity style={styles.fab} onPress={() => addDespesa('Nova Despesa', 'shopping-outline')}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
