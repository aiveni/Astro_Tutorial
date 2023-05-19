//import {openDB, closeDB} from './database.js'
import sqlite3 from 'sqlite3';

const createUser = (username, password, email) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    db.run(`insert into "User" values ("${username}", "${password}", "${email}")`)
    db.close()
}

const addComment = (comment, post, user) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO Comment (comment, post, "user") VALUES('${comment}', ${post}, '${user}');`, (error) => {
            if (error) {
                reject(error);
            } else {
                db.close()
                resolve()
            }
        })
    })

}

export { createUser, addComment }