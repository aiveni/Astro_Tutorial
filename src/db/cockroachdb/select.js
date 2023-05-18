import { Client } from "pg"
import process from 'node:process';
if (process.env.NODE_ENV !== 'production') {
    import("dotenv").then((dotenv) => dotenv.config())
}


export const getAllUsers = async () => {
    const client = new Client(process.env.DATABASE_URL)
    return new Promise((resolve, reject) => {
        client.connect().then((_) => {
            client.query('select * from public."User"', (err, res) => {
                client.end()
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(res.rows)
                }
            })
        })
    })
}

export const userExists = async (username) => {
    const client = new Client(process.env.DATABASE_URL)
    return new Promise((resolve, reject) => {
        client.connect().then((_) => {
            client.query(`select * from public."User" where username = '${username}'`, (err, res) => {
                client.end()
                if (err) {
                    console.log(err)
                    reject(err)
                } else if(res.rows){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    })
}

export const correctLogin = async (username, password) => {
    const client = new Client(process.env.DATABASE_URL)
    return new Promise((resolve, reject) => {
        client.connect().then((_) => {
            client.query(`select * from public."User" where username = '${username}' and "password" = '${password}'`, (err, res) => {
                client.end()
                if (err) {
                    console.log(err)
                    reject(err)
                } else if(res.rows){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    })
}