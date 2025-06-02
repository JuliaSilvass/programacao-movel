import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EditarMeta({ route, navigation }) {
  const { meta, onSalvar, onExcluir } = route.params;

  const [nome, setNome] = useState(meta.nome);
  const [icone, setIcone] = useState(meta.icone);
  const [valor, setValor] = useState(String(meta.valor));
  const [categoria, setCategoria] = useState(meta.categoria);
  const [dataLimite, setDataLimite] = useState(meta.dataLimite);
  const [status, setStatus] = useState(meta.status);
  const [ambiente, setAmbiente] = useState(meta.idAmbiente);

  const handleSalvar = () => {
    onSalvar({
      ...meta,
      nome,
      icone,
      valor: parseFloat(valor),
      categoria,
      dataLimite,
      status,
      idAmbiente
    });
    navigation.goBack();
  };

  const handleExcluir = () => {
    Alert.alert(
      'Excluir Meta',
      'Tem certeza que deseja excluir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            onExcluir(meta.id);
            navigation.goBack();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da meta:</Text>
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

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Ambiente:</Text>
      <TextInput
        value={ambiente}
        onChangeText={setAmbiente}
        style={styles.input}
      />

      <Text style={styles.label}>Categoria:</Text>
      <TextInput
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
      />

      <Text style={styles.label}>Data limite:</Text>
      <TextInput
        value={dataLimite}
        onChangeText={setDataLimite}
        style={styles.input}
      />

      <Text style={styles.label}>Status:</Text>
      <TextInput
        value={status}
        onChangeText={setStatus}
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
