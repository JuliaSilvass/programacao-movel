import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import telaInicial from './src/screens/inicio';
import telaDespesas from './src/screens/despesas';
import telaMetas from './src/screens/metas';
import telaRelatorios from './src/screens/relatorios';
import telaMapa from './src/screens/mapas';
import telaSobre from './src/screens/sobre';
import telaAmbiente from './src/screens/ambientes';
import styles from './src/styles';

const Drawer = createDrawerNavigator();


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
          component={telaAmbiente}
          options={{
            drawerLabel: "Ambientes",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="layers-outline" size={20} color={color} />
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
