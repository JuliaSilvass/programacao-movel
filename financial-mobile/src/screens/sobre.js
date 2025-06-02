import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function TelaSobre({ navigation }) {
  return (
    <View style={styles.sobre}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>Financial Mobile</Text>
      <Text style={styles.text}>Versão: 1.0.0</Text>
      <Text style={styles.text}>Desenvolvido por: Julia</Text>
      <Text style={styles.text}>Este app ajuda a gerenciar suas finanças!</Text>
    </View>
  );
}