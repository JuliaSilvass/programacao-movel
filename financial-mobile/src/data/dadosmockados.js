//dados de ambientes
export const ambientes = [
  { id: '1', nome: 'Casa', icone: 'home-outline' },
  { id: '2', nome: 'Trabalho', icone: 'briefcase-outline' },
  { id: '3', nome: 'Escritório', icone: 'business-outline' },
  { id: '4', nome: 'Estúdio', icone: 'musical-notes-outline' }
];

//dados de despesas
export const despesas = [
  { 
    id: '1', nome: 'Alimentação', valor: 120, categoria: 'Alimentação', 
    data: '2025-05-30', icone: 'fast-food-outline', 
    coordenada: { latitude: -23.56, longitude: -46.64 }, 
    idAmbiente: '1' 
  },
  { 
    id: '2', nome: 'Transporte', valor: 200, categoria: 'Transporte', 
    data: '2025-05-29', icone: 'car-outline', 
    coordenada: { latitude: -23.55, longitude: -46.63 }, 
    idAmbiente: '2' 
  },
  { 
    id: '3', nome: 'Saúde', valor: 150, categoria: 'Saúde', 
    data: '2025-05-28', icone: 'medkit-outline', 
    coordenada: { latitude: -23.561, longitude: -46.641 }, 
    idAmbiente: '1' 
  },
  { 
    id: '4', nome: 'Educação', valor: 300, categoria: 'Educação', 
    data: '2025-05-27', icone: 'school-outline', 
    coordenada: { latitude: -23.54, longitude: -46.62 }, 
    idAmbiente: '3' 
  },
  { 
    id: '5', nome: 'Instrumentos', valor: 1500, categoria: 'Equipamentos', 
    data: '2025-05-25', icone: 'musical-notes-outline', 
    coordenada: { latitude: -23.53, longitude: -46.61 }, 
    idAmbiente: '4' 
  }
];

//dados de metas

export const metas = [
  { 
    id: '1', nome: 'Economizar para Viagem', valor: 5000, categoria: 'Viagem', 
    dataLimite: '2025-12-31', icone: 'airplane-outline', status: 'ativa', 
    idAmbiente: '1' 
  },
  { 
    id: '2', nome: 'Comprar Carro Novo', valor: 30000, categoria: 'Transporte', 
    dataLimite: '2026-06-30', icone: 'car-outline', status: 'ativa', 
    idAmbiente: '1' 
  },
  { 
    id: '3', nome: 'Estudar para Concurso', valor: 2000, categoria: 'Educação', 
    dataLimite: '2025-08-15', icone: 'school-outline', status: 'ativa', 
    idAmbiente: '3' 
  },
  { 
    id: '4', nome: 'Reforma da Casa', valor: 15000, categoria: 'Casa', 
    dataLimite: '2025-11-01', icone: 'home-outline', status: 'ativa', 
    idAmbiente: '1' 
  }
];

