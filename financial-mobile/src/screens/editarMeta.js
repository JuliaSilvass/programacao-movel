import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView } from 'react-native';
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

export default function EditarMeta({ route, navigation }) {
  const { meta, onSalvar, onExcluir } = route.params;

  const [nome, setNome] = useState(meta.nome);
  const [icone, setIcone] = useState(meta.icone);
  const [valor, setValor] = useState(String(meta.valor));
  const [categoria, setCategoria] = useState(meta.categoria);
  //const [dataLimite, setDataLimite] = useState(meta.dataLimite);
  const [dataLimite, setDataLimite] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [status, setStatus] = useState(meta.status);
  const [ambiente, setAmbiente] = useState(meta.idAmbiente);

  const handleSalvar = () => {
    onSalvar({
      ...meta,
      nome,
      icone,
      valor: parseFloat(valor),
      categoria,
      dataLimite: dataLimite.toLocaleDateString('pt-BR'),
      status,
      ambiente
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

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setData(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.containerTeclado}
    >
      <ScrollView contentContainerStyle={styles.containerEditar} keyboardShouldPersistTaps="handled">

        <Text style={styles.label}>Nome da meta:</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholder='Digite o nome...'
        />

        <Text style={styles.label}>Escolha o Ícone:</Text>
        <View style={styles.opcoesContainer}>
          {opcoesIcones.map((icon) => (
            <TouchableOpacity
              key={icon}
              style={[styles.opcao, icone === icon && styles.opcaoSelecionada]}
              onPress={() => setIcone(icon)}
            >
              <Icon name={icon} size={30} color={icone === icon ? '#fff' : '#226473'}/>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Valor:</Text>
        <TextInput
          value={String(valor)}
          onChangeText={setValor}
          keyboardType="numeric"
          style={styles.input}
          placeholder='Ex: 1000.00'
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

        <Text style={styles.label}>Data limite:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{dataLimite.toLocaleDateString('pt-BR')}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dataLimite}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Text style={styles.label}>Status:</Text>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Ativa" value="ativa" />
          <Picker.Item label="Concluída" value="concluida" />
        </Picker>

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

