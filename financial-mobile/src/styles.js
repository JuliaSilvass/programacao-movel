import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 20,
  },
  // title:{
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: '#226473',
  //   marginBottom: 20,
  // },
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
  }
});

export default styles;