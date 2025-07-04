import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createTable } from './database/db';
import TelaInicial from './screens/inicio';
import TelaDespesas from './screens/telaDespesas';
import EditarDespesa from './screens/editarDespesas';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DespesaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaDespesas" component={TelaDespesas} options={{ title: 'Todas as Despesas:' }} />
      <Stack.Screen name="EditarDespesa" component={EditarDespesa} options={{ title: 'Editar Despesa' }} />
    </Stack.Navigator>
  );
}

export default function App() {

  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function setup() {
      await createTable();
      setIsReady(true);
    }
    setup();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Preparando o banco de dados...</Text>
      </View>
    );
  }

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
          component={TelaInicial}
          options={{
            drawerLabel: "Inicio",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />
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
          name="EditarDespesa"
          component={EditarDespesa}
          options={{
            drawerLabel: "Mater Despesa",
            headerShown: true,
            drawerIcon: ({ color }) => <Icon name="create-outline" size={20} color={color} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
