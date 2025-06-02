import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function TelaSobre({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Financial Mobile</Text>
      <Text>Versão: 1.0.0</Text>
      <Text>Desenvolvido por: Julia</Text>
      <Text>Este app ajuda a gerenciar suas finanças!</Text>
    </View>
  );
}