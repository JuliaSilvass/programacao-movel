import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';

const saldoTotal = 1250.75;

// Dados mockados das metas (permanece fora)
const metas = [
  { id: '1', nome: 'Economizar para Viagem', valor: 5000, progresso: 0.2 },
  { id: '2', nome: 'Comprar Carro Novo', valor: 30000, progresso: 0.05 },
  { id: '3', nome: 'Estudar para Concurso', valor: 2000, progresso: 0.4 },
  { id: '4', nome: 'Reforma da Casa', valor: 15000, progresso: 0.1 },
];

// Pega a meta com maior progresso para destaque
const metaEmDestaque = metas.reduce((prev, current) => 
  (prev.progresso > current.progresso) ? prev : current
);

export default function Inicial() {
  // Coloque o useState aqui dentro, densttro da função do componente!
  const [despesas, setDespesas] = useState([
    {
      id: '1', nome: 'Alimentação', valor: 120, categoria: 'Alimentação',
      data: '2025-05-30', icone: 'fast-food-outline',
      coordenada: { latitude: -23.56, longitude: -46.64 },
      idAmbiente: 'Casa'
    },
    {
      id: '2', nome: 'Transporte', valor: 200, categoria: 'Transporte',
      data: '2025-05-29', icone: 'car-outline',
      coordenada: { latitude: -23.55, longitude: -46.63 },
      idAmbiente: 'Trabalho'
    },
    {
      id: '3', nome: 'Saúde', valor: 150, categoria: 'Saúde',
      data: '2025-05-28', icone: 'medkit-outline',
      coordenada: { latitude: -23.561, longitude: -46.641 },
      idAmbiente: 'Casa'
    },
    {
      id: '4', nome: 'Educação', valor: 300, categoria: 'Educação',
      data: '2025-05-27', icone: 'school-outline',
      coordenada: { latitude: -23.54, longitude: -46.62 },
      idAmbiente: 'Escritório'
    },
    {
      id: '5', nome: 'Instrumentos', valor: 1500, categoria: 'Equipamentos',
      data: '2025-05-25', icone: 'musical-notes-outline',
      coordenada: { latitude: -23.53, longitude: -46.61 },
      idAmbiente: 'Estúdio'
    }
  ]);

  return (
    <View style={styles.container}>
      {/* Saldo Total */}
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoTexto}>Saldo Total</Text>
        <Text style={styles.saldoValor}>R$ {saldoTotal.toFixed(2)}</Text>
      </View>

      {/* Últimas Despesas */}
      <View style={styles.inicioContainer}>
        <Text style={styles.sectionTitle}>Últimas Despesas</Text>
        <FlatList
          data={despesas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.inicioItem}>
              <View>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemCategoria}>{item.categoria}</Text>
              </View>
              <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      {/* Metas */}
      <View style={styles.inicioContainer}>
        <Text style={styles.sectionTitle}>Minhas Metas</Text>
        <FlatList
          data={metas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.inicioItem}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemValor}>R$ {item.valor.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      {/* Progresso da Meta em Destaque */}
      <View style={styles.metaContainer}>
        <Text style={styles.sectionTitle}>Progresso da Meta: {metaEmDestaque.nome}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { flex: metaEmDestaque.progresso }]} />
          <View style={{ flex: 1 - metaEmDestaque.progresso }} />
        </View>
        <Text>{(metaEmDestaque.progresso * 100).toFixed(0)}%</Text>
      </View>
    </View>
  );
}
