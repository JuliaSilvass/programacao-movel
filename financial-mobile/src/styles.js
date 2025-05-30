import { StyleSheet } from 'react-native';

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

export default styles;