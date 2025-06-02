import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles'; 

const opcoesIcones = [
  'cart-outline', 'fast-food-outline', 'car-outline', 'heart-outline',
  'game-controller-outline', 'home-outline', 'medkit-outline', 'gift-outline'
];

const opcoesCategorias = [
  'Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Moradia', 'Outros'
];

const ambientesCriados = [
  'Casa', 'Trabalho', 'Estudo', 'Viagem'
];

export default function EditarDespesa({ route, navigation }) {
  const { despesa, onSalvar, onExcluir } = route.params;

  const [nome, setNome] = useState(despesa.nome);
  const [icone, setIcone] = useState(despesa.icone);
  const [valor, setValor] = useState(despesa.valor);
  const [categoria, setCategoria] = useState(despesa.categoria);
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [ambiente, setAmbiente] = useState(despesa.idAmbiente);

  const handleSalvar = () => {
    onSalvar({
      ...despesa,
      nome,
      icone,
      valor: parseFloat(valor),
      categoria,
      data: data.toLocaleDateString('pt-BR'),
      ambiente
    });
    navigation.goBack();
  };

  const handleExcluir = () => {
    Alert.alert(
      'Excluir Despesa',
      'Tem certeza que deseja excluir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Excluir', 
          style: 'destructive', 
          onPress: () => {
            onExcluir(despesa.id);
            navigation.goBack();
          } 
        }
      ]
    );
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.containerEditarDespesa} keyboardShouldPersistTaps="handled">
        
        <Text style={styles.label}>Nome da despesa:</Text>
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
              style={[styles.opcao, icone === icon && styles.opcaoSelecionada]}
              onPress={() => setIcone(icon)}
            >
              <Icon name={icon} size={30} color={icone === icon ? '#fff' : '#226473'} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Valor (R$):</Text>
        <TextInput
          value={String(valor)}
          onChangeText={setValor}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ex: 50.00"
        />

        <Text style={styles.label}>Ambiente:</Text>
        <Picker
          selectedValue={ambiente}
          onValueChange={(itemValue) => setAmbiente(itemValue)}
          style={styles.picker}
        >
          {ambientesCriados.map((amb) => (
            <Picker.Item key={amb} label={amb} value={amb} />
          ))}
        </Picker>

        <Text style={styles.label}>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          onValueChange={(itemValue) => setCategoria(itemValue)}
          style={styles.picker}
        >
          {opcoesCategorias.map((cat) => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>

        <Text style={styles.label}>Data:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{data.toLocaleDateString('pt-BR')}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.excluir]} onPress={handleExcluir}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

