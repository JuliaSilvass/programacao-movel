
import * as SQLite from 'expo-sqlite';
import { Despesa } from '../models/despesas';

const dbPromise = SQLite.openDatabaseAsync('financeiro.db');

export async function getAllDespesas(): Promise<Despesa[]> {
  const db = await dbPromise;
  const results = await db.getAllAsync('SELECT * FROM despesas ORDER BY data DESC');
  return results as Despesa[];
}

export async function insertDespesa(despesa: Omit<Despesa, 'id'>): Promise<number> {
  const db = await dbPromise;
  const result = await db.runAsync(
    `INSERT INTO despesas (nome, icone, valor, categoria, data) VALUES (?, ?, ?, ?, ?)`,
    despesa.nome, despesa.icone, despesa.valor, despesa.categoria, despesa.data
  );
  return result.lastInsertRowId;
}

export async function updateDespesa(despesa: Despesa): Promise<void> {
  const db = await dbPromise;
  await db.runAsync(
    `UPDATE despesas SET nome = ?, icone = ?, valor = ?, categoria = ?, data = ? WHERE id = ?`,
    despesa.nome, despesa.icone, despesa.valor, despesa.categoria, despesa.data, despesa.id
  );
}

export async function deleteDespesa(id: number): Promise<void> {
  const db = await dbPromise;
  await db.runAsync(`DELETE FROM despesas WHERE id = ?`, id);
}
