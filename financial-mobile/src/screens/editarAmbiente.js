import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles'; 

const opcoesIcones = [
  'home-outline', 'briefcase-outline', 'musical-notes-outline', 'school-outline',
  'fast-food-outline', 'car-outline', 'medkit-outline', 'airplane-outline',
  'game-controller-outline', 'paw-outline'
];

export default function EditarAmbiente({ route, navigation }) {
  const { ambiente, onSalvar, onExcluir } = route.params;

  const [nome, setNome] = useState(ambiente.nome);
  const [icone, setIcone] = useState(ambiente.icone);

  const handleSalvar = () => {
    onSalvar({ ...ambiente, nome, icone });
    navigation.goBack();
  };

  const handleExcluir = () => {
    Alert.alert(
      'Excluir Ambiente',
      'Tem certeza que deseja excluir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => {
            onExcluir(ambiente.id);
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Ambiente:</Text>
      <TextInput 
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholder="Digite o nome..."
      />

      <Text style={styles.label}>Escolha o Ícone:</Text>
      <View style={styles.opcoesContainer}>
        {opcoesIcones.map((icon) => (
          <TouchableOpacity 
            key={icon}
            style={[
              styles.opcao, 
              icone === icon && styles.opcaoSelecionada
            ]}
            onPress={() => setIcone(icon)}
          >
            <Icon name={icon} size={30} color={icone === icon ? '#fff' : '#226473'} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.excluir]} onPress={handleExcluir}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}