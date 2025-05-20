import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

//Tela Inicial
function Inicial({ navigation }) {
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
        initialRouteName="Tela Inicial"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "green",
            width: "60%"
          },
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "gray",
          drawerInactiveTintColor: "black",
        }}>
        <Drawer.Screen
          name="Tela Inicial"
          component={Inicial}
          options={{
            drawerLabel: "Página do Começo",
            headerShown: true,   // Ocultar titulo da página : false
            drawerIcon: ({ colorIcone }) => <Icon name="home" size={20} color={colorIcone} />,
            headerTintColor: "red",
            headerStyle: { backgroundColor: "black" }
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
