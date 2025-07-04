import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles';
import { Despesa } from '../models/despesas';
import {insertDespesa, updateDespesa, deleteDespesa} from '../database/despesaService';

const opcoesIcones = [
  'cart-outline', 'fast-food-outline', 'car-outline', 'heart-outline',
  'game-controller-outline', 'home-outline', 'medkit-outline', 'gift-outline'
];

const opcoesCategorias = [
  'Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Moradia', 'Outros'
];


export default function EditarDespesa({ route, navigation }) {

  const despesaParam: Despesa | undefined = route.params?.despesa;

  const [nome, setNome] = useState(despesaParam?.nome || '');
  const [icone, setIcone] = useState(despesaParam?.icone || opcoesIcones[0]);
  const [valor, setValor] = useState(despesaParam ? String(despesaParam.valor) : '');
  const [categoria, setCategoria] = useState(despesaParam?.categoria || opcoesCategorias[0]);
  const [data, setData] = useState(despesaParam ? new Date(despesaParam.data) : new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);


  async function handleSalvar() {
    if (!nome.trim() || !valor.trim() || isNaN(Number(valor))) {
      Alert.alert('Erro', 'Preencha nome e valor corretamente.');
      return;
    }

    const despesaToSave: Omit<Despesa, 'id'> & Partial<Pick<Despesa, 'id'>> = {
      nome: nome.trim(),
      icone,
      valor: parseFloat(valor),
      categoria,
      data: data.toISOString(),
    };

    try {
      if (despesaParam && despesaParam.id) {
        await updateDespesa({ ...despesaToSave, id: despesaParam.id });
      } else {
        await insertDespesa(despesaToSave);
      }

      route.params?.onSalvar?.();
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar despesa.');
      console.error(error);
    }
  }

  async function handleExcluir() {
    if (!despesaParam?.id) return;

    Alert.alert(
      'Excluir Despesa',
      'Tem certeza que deseja excluir esta despesa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDespesa(despesaParam.id!);
              route.params?.onSalvar?.();
              navigation.goBack();
            } catch (error) {
              Alert.alert('Erro', 'Falha ao excluir despesa.');
              console.error(error);
            }
          }
        }
      ]
    );
  }

  function onChangeDate(event, selectedDate) {
    setShowDatePicker(false);
    if (selectedDate) setData(selectedDate);
  }

  return (
    <KeyboardAvoidingView style={styles.containerTeclado} behavior="padding" keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={styles.containerEditar} keyboardShouldPersistTaps="handled">

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
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ex: 50.00"
        />

        <Text style={styles.label}>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          onValueChange={setCategoria}
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

        {despesaParam?.id && (
          <TouchableOpacity style={[styles.button, styles.excluir]} onPress={handleExcluir}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
