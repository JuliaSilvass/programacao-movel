import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import styles from "../styles";
import Icon from 'react-native-vector-icons/Ionicons';


export default function telaAmbiente({ navigation }) {
  const [ambientes, setAmbientes] = useState([
    { id: '1', nome: 'Casa', icone: 'home-outline' },
    { id: '2', nome: 'Trabalho', icone: 'briefcase-outline' },
    { id: '3', nome: 'Escritório', icone: 'business-outline' },
    { id: '4', nome: 'Estúdio', icone: 'musical-notes-outline' },
  ]);

  const editarAmbiente = (ambienteEditado) => {
    setAmbientes(prevAmbientes =>
      prevAmbientes.map(ambiente =>
        ambiente.id === ambienteEditado.id ? ambienteEditado : ambiente
      )
    );
  };

  const excluirAmbiente = (id) => {
    setAmbientes(ambientes.filter(ambiente => ambiente.id !== id));
  }

  const addAmbiente = (nomeAmbiente, iconeAmbiente) => {
    setAmbientes([...ambientes, {
      id: Date.now().toString(),
      nome: nomeAmbiente,
      icone: iconeAmbiente,
    }])
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemAmbiente}
      onPress={() => navigation.navigate('EditarAmbiente', { 
        ambiente: item, 
        onSalvar: editarAmbiente, 
        onExcluir: excluirAmbiente 
      })}
    >
      <Icon name={item.icone} size={24} color="#226473" />
      <Text style={styles.itemText}>{item.nome}</Text>

      {/* <TouchableOpacity onPress={() => excluirAmbiente(item.id)}>
        <Icon name="trash-outline" size={20} color="#226473" />
      </TouchableOpacity> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ambientes}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum ambiente cadastrado.</Text>}
      />

      <TouchableOpacity style={styles.fab} onPress={() => addAmbiente('Novo Ambiente', 'home-outline')}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}
