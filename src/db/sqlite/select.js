import sqlite3 from 'sqlite3';

export const userExists = (username) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM User WHERE username = ?", [username], function (err, row) {
            if (err) {
                console.log(err.message);
                reject(err)
            } else if (row) {
                db.close()
                resolve(true)
            }else{
                db.close()
                resolve(false)
            }
        });
    })
}

export const correctLogin = (username, password) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM User WHERE username = ? and password = ?", [username, password], function (err, row) {
            if (err) {
                console.log(err.message);
                reject(err)
            } else if (row) {
                db.close()
                resolve(true)
            }else{
                db.close()
                resolve(false)
            }
        });
    })
}

export const getAllUsers = () => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.all("SELECT username FROM User", [], function (err, rows) {
            if (err) {
                console.log(err.message);
                reject(err)
            } else {
                resolve(rows.map((u) => u.username))
            }
        });
    })
}

export const getComments = (post) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.all("SELECT comment, user FROM Comment WHERE post = ?", [post], function (err, rows) {
            if (err) {
                console.log(err.message);
                reject(err)
            } else {
                resolve(rows)
            }
        });
    })
}

