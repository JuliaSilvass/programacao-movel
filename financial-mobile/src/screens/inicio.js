import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles'; 

const saldoTotal = 1250.75;
const ultimasDespesas = [
  { id: '1', descricao: 'Aluguel', valor: 800.00 },
  { id: '2', descricao: 'Mercado', valor: 150.50 },
  { id: '3', descricao: 'Transporte', valor: 60.25 },
  { id: '4', descricao: 'Saúde', valor: 80.25 },
];

const progressoMeta = 0.65;

export default function Inicial() {
  return (
    <View style={styles.container}>
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoTexto}>Saldo Total</Text>
        <Text style={styles.saldoValor}>R$ {saldoTotal.toFixed(2)}</Text>
      </View>

      <View style={styles.despesasContainer}>
        <Text style={styles.sectionTitle}>Últimas Despesas</Text>
        <FlatList
          data={ultimasDespesas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.despesaItem}>
              <Text>{item.descricao}</Text>
              <Text>R$ {item.valor.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.metaContainer}>
        <Text style={styles.sectionTitle}>Progresso da Meta</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { flex: progressoMeta }]} />
          <View style={{ flex: 1 - progressoMeta }} />
        </View>
        <Text>{(progressoMeta * 100).toFixed(0)}%</Text>
      </View>
    </View>
  );
}
