import sqlite3 from 'sqlite3';

export const userExists = (username) => {
    const db = new sqlite3.Database('./src/db/astroDB.sqlite');
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM User WHERE username = ?", [username], function (err, row) {
            if (err) {
                console.log(err.message);
                reject(false)
            } else if (row) {
                db.close()
                resolve(true)
            }else{
                resolve(false)
            }
        });
    })
}

