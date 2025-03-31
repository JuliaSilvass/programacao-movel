import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { useState } from 'react';



export default function App() {

  const [total, setTotal] = useState(0);

  const precos = {
    "carne": 12.00,
    "queijo": 8.00,
    "frangoC": 14.00,
    "calabresa": 9.00,
  };

  const addToTotal = (pastelNome) => {
    const preco = precos[pastelNome]
    setTotal((prevTotal) => total + preco)
  }

  const finalizarPedido = () => {
    Alert.alert("Total do pedido", `R$ ${total.toFixed(2)}`, [
      { text: "OK", onPress: () => setTotal(0) }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}> 
        <Text style={styles.title}>Pastelaria da Juju</Text>
      </View>
      <View style={styles.container2}>
        
        <TouchableOpacity style={styles.button} onPress={() => addToTotal("carne")}>
          <Image source={require('./assets/pastel_de_carne.jpg')} style={styles.image}></Image>
          <Text style={styles.text}>Pastel de carne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToTotal("queijo")}>
          <Image source={require('./assets/pastel_de_queijo.jpg')} style={styles.image}></Image>
          <Text style={styles.text}>Pastel de queijo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.button} onPress={() => addToTotal("frangoC")}>
          <Image source={require('./assets/pastel_de_frango.jpg')} style={styles.image}></Image>
          <Text style={styles.text}>Pastel de frango com catupiry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToTotal("calabresa")}>
          <Image source={require('./assets/pastel_de_calabresa.jpg')} style={styles.image}></Image>
          <Text style={styles.text}>Pastel de calabresa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style ={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.finalizeButton} onPress={finalizarPedido}>
          <Text style={styles.finalizeButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DB8748',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems:'center',
    width: 160,
    height: 250,
    justifyContent: 'center',
  },
  container1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#49CDDB',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  container3: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#49CDDB',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  container4: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
  },
  image: {
    width: 150,   
    height: 180,  
    marginBottom: 5, 
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
    paddingTop: 15,
  },
  text: {
    flexWrap: 'wrap',  
    textAlign: 'center', 
    maxWidth: 150,  
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  finalizeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    marginTop: 10,
  },
  finalizeButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
