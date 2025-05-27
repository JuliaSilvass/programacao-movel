import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// Dados de exemplo
const saldoTotal = 1250.75;
const ultimasDespesas = [
  { id: '1', descricao: 'Aluguel', valor: 800.00 },
  { id: '2', descricao: 'Supermercado', valor: 150.50 },
  { id: '3', descricao: 'Transporte', valor: 60.25 },
  { id: '4', descricao: 'Saúde', valor: 80.25 },
];

const progressoMeta = 0.65;


//Tela Inicial
function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Saldo Total */}
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoTexto}>Saldo Total</Text>
        <Text style={styles.saldoValor}>R$ {saldoTotal.toFixed(2)}</Text>
      </View>

      {/* Últimas Despesas */}
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

      {/* Progresso da Meta */}
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

function telaDespesas({ navigation }) {

  function handleCadastrarDespesa() {
    console.log("Cadastrar despesa!");
    // ou navigation.navigate("Cadastro de Despesas") se quiser abrir outra tela
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

// function telaCadastroDespesas({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Tela da Início</Text>
//     </View>
//   );
// }

function telaMetas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela da Início</Text>
    </View>
  );
}

function telaRelatorios({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela da Início</Text>
    </View>
  );
}

function telaMapa({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela da Início</Text>
    </View>
  );
}

function telaSobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela da Início</Text>
    </View>
  );
}



export default function App() {
  const [colorIcone, setColorIcone] = useState("red");

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#E4F2EE",
            width: "60%"
          },
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#226473",
          drawerInactiveTintColor: "black",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#E4F2EE" },
          
        }}>
        <Drawer.Screen
          name="Inicio"
          component={Inicial}
          options={{
            drawerLabel: "Inicio",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Despesas"
          component={telaDespesas}
          options={{
            drawerLabel: "Despesas",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="cash-outline" size={20} color={color} />
          }}
        />
        {/* <Drawer.Screen
          name="Cadastro de Despesas"
          component={telaCadastroDespesas}
          options={{
            drawerLabel: "Cadastro de despesas",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="create-outline" size={20} color={color} />
          }}
        /> */}
        <Drawer.Screen
          name="Metas"
          component={telaMetas}
          options={{
            drawerLabel: "Metas",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="flag-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Tela de Relatórios"
          component={telaRelatorios}
          options={{
            drawerLabel: "Relatórios",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="bar-chart-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Mapa"
          component={telaMapa}
          options={{
            drawerLabel: "Mapa",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="map-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={telaSobre}
          options={{
            drawerLabel: "Sobre",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="information-circle-outline" size={20} color={color} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#226473',
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
  saldoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  saldoTexto: {
    fontSize: 18,
    color: '#555',
  },
  saldoValor: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#226473',
  },
  despesasContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
  },
  despesaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  metaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressFill: {
    backgroundColor: '#226473',
  },
});
