import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseAsync('financeiro.db');

export async function createTable() {

  try {

    console.log("Conexão com o banco aberta com sucesso.");

    (await db).execSync(`
      CREATE TABLE IF NOT EXISTS despesas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        icone TEXT,
        valor REAL NOT NULL,
        categoria TEXT,
        data TEXT
      );
    `);
    console.log("Tabela 'despesas' criada com sucesso.");
  } catch (error) {
    console.error('Erro ao criar tabela:', error);
  }
}

