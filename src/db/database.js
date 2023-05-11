const sqlite3 = require('sqlite3').verbose();

export const openDB = () => {
    const db = new sqlite3.Database('./astroDB.sqlite');
    return db
}

export const closeDB = (db) =>{
    db.close()
}