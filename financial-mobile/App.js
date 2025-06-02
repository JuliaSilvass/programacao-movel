import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaInicial from './src/screens/inicio';
import TelaDespesas from './src/screens/despesas';
import EditarDespesa from './src/screens/editarDespesa';
import EditarMeta from './src/screens/editarMeta';
import TelaMetas from './src/screens/metas';
import telaRelatorios from './src/screens/relatorios';
import telaMapa from './src/screens/mapas';
import telaSobre from './src/screens/sobre';
import TelaAmbiente from './src/screens/ambientes';
import EditarAmbiente from './src/screens/editarAmbiente';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AmbienteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaAmbiente" component={TelaAmbiente} options={{ title: '' }} />
      <Stack.Screen name="EditarAmbiente" component={EditarAmbiente} options={{ title: 'Editar Ambiente' }} />
    </Stack.Navigator>
  );
}


function DespesaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaDespesas" component={TelaDespesas} options={{ title: '' }} />
      <Stack.Screen name="EditarDespesa" component={EditarDespesa} options={{ title: 'Editar Despesa' }} />
    </Stack.Navigator>
  );
}

function MetaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaMetas" component={TelaMetas} options={{ title: '' }} />
      <Stack.Screen name="EditarMeta" component={EditarMeta} options={{ title: 'Editar Meta' }} />
    </Stack.Navigator>
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
          component={telaInicial}
          options={{
            drawerLabel: "Inicio",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Meus ambientes"
          component={AmbienteStack}
          options={{
            drawerLabel: "Ambientes",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="layers-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Despesas"
          component={DespesaStack}
          options={{
            drawerLabel: "Despesas",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="cash-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Metas"
          component={MetaStack}
          options={{
            drawerLabel: "Metas",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="flag-outline" size={20} color={color} />
          }}
        />
        <Drawer.Screen
          name="Relatorios"
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
