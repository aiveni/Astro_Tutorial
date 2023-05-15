//import {openDB, closeDB} from './database.js'
import sqlite3 from 'sqlite3';

const createUser = (username, password, email) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    db.run(`insert into "User" values ("${username}", "${password}", "${email}")`)
    db.close()
}

export {createUser}