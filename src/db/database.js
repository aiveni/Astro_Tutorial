import sqlite3 from 'sqlite3';

export const openDB = () => {
    const db = new sqlite3.Database('./astroDB.sqlite');
    return db
}

export const closeDB = (db) =>{
    db.close()
}

export function databaseHandler(func){
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    func(db);
    db.close()
}