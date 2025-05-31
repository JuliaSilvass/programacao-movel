import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      />

      <Text style={styles.label}>Ícone:</Text>
      <TextInput 
        value={icone}
        onChangeText={setIcone}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.excluir]} onPress={handleExcluir}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginVertical: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
  button: { backgroundColor: '#226473', padding: 12, marginVertical: 8, borderRadius: 4 },
  excluir: { backgroundColor: 'red' },
  buttonText: { color: '#fff', textAlign: 'center' },
});
