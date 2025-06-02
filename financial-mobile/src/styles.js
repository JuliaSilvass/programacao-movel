import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 20,
  },
  containerEditar: {
    padding: 20,
    backgroundColor: '#fff',
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
  inicioContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
  },
  inicioItem: {
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
  itemAmbiente: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333'
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontStyle: 'italic',
    color: '#777'
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
  itemNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  itemValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#226473',
  },

  itemCategoria: {
    fontSize: 12,
    color: '#777',
  },

  itemData: {
    fontSize: 12,
    color: '#777',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  legend: {
    marginTop: 12,
    fontSize: 14,
    color: '#666'
  },
  map: {
    flex: 1,
    width: '100%',
  },
  sobre: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  label: { 
    fontSize: 16, 
    marginVertical: 8 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 6, 
    marginBottom: 12 
  },
  opcoesContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginVertical: 12
  },
  opcao: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 10, 
    margin: 6, 
    backgroundColor: '#f2f2f2'
  },
  opcaoSelecionada: { 
    backgroundColor: '#4DB6AC',  
    borderColor: '#00796B'
  },
  button: { 
    backgroundColor: '#226473', 
    padding: 12, 
    marginVertical: 5, 
    borderRadius: 6 
  },
  excluir: { 
    backgroundColor: 'red', 
    marginBottom: 60
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center' 
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 12,
    padding: 1,
    backgroundColor: '#f2f2f2'
  },
  containerTeclado: {
    flex: 1,
  },
});



export default styles;