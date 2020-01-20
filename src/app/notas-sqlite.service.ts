import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotasSQLiteService {

  objectSqlite: SQLiteObject = null;
  constructor(private sQLite: SQLite) { }

  setDatabase(objectSqlite: SQLiteObject) {
    if (this.objectSqlite === null) {
      this.objectSqlite = objectSqlite;
    }
  }
  createTables() {
    const sql = 'CREATE TABLE IF NOT EXISTS notas(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT,description TEXT)';
    return this.objectSqlite.executeSql(sql, []);
  }
  listarNotas() {
    const sql = 'SELECT * FROM notas';
    return this.objectSqlite.executeSql(sql, [])
    .then(res => {
      const notas = [];
      for (let index = 0; index < res.length; index++) {
        notas.push(res.rows.item(index));
      }
      return Promise.resolve(notas);
    })
    .catch(err => {
      Promise.reject(err);
      console.log(err);
    });
  }
  agregarNotas(nota: any) {
    const sql = 'INSERT INTO notas(titulo,descripcion) VALUES (?,?)';
    return this.objectSqlite.executeSql(sql, [nota.titulo, nota.descripcion]);
  }

}
