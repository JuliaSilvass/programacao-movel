import React from "react";
import { View, Text, Button, Alert, Dimensions } from 'react-native';
import styles from "../styles";
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

export default function telaRelatorios({ navigation }) {
  
  const data = {
    labels: ["Casa", "Trabalho", "Lazer"],
    datasets: [{ data: [200, 150, 300] }]
  };

  const chartConfig = {
    backgroundGradientFrom: '#fdfdfd',
    backgroundGradientTo: '#fdfdfd',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(34, 100, 115, ${opacity})`,
    barPercentage: 0.7,
    propsForLabels: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    propsForBackgroundLines: {
      stroke: '#e3e3e3',
    },
  };

  return (
    <View style={[styles.container, { padding: 16 }]}>
      
      <Text style={[styles.title, { fontSize: 20, fontWeight: 'bold', marginBottom: 16 }]}>
        Relatório de Gastos por Ambiente
      </Text>

      <BarChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        style={{ borderRadius: 12 }}
      />

      <Text style={[styles.legend, { marginTop: 12, fontSize: 14, color: '#666' }]}>
        Valores em R$
      </Text>

      <Button title="Exportar" onPress={() => Alert.alert("Exportado com sucesso!")} />

    </View>
  );
}
