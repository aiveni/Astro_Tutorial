import {openDB, closeDB} from './database.js'

const createUser = (username, password, email) => {
    db = openDB()
    db.run(`insert into user values("${username}", "${password}", "${email}")`)
    closeDB(db)
}