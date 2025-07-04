import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

export default function Inicial() {
  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <View style={[styles.container, styleExtras.centralizado]}>
      <Icon name="wallet-outline" size={80} color="#226473" />
      <Text style={styleExtras.titulo}>Sistema de Controle Financeiro</Text>
      <Text style={styleExtras.subtitulo}>Aplicativo desenvolvido por Julia Silva</Text>
    </View>
  );
}

const styleExtras = StyleSheet.create({
  centralizado: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#226473',
    marginTop: 20
  },
  subtitulo: {
    fontSize: 16,
    color: '#444',
    marginTop: 10
  },
  data: {
    fontSize: 14,
    color: '#777',
    marginTop: 5
  }
});
