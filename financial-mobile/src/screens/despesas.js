import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles"; 
import Icon from 'react-native-vector-icons/Ionicons';

export default function telaDespesas({ navigation }) {

  function handleCadastrarDespesa() {
    console.log("Cadastrar despesa!");
  }

  return (
    <View style={styles.container}>
      <Text>Tela de Despesas</Text>
      <TouchableOpacity style={styles.fab} onPress={handleCadastrarDespesa}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}