import { Client } from "pg"
console.log("A")
console.log(process.env.DATABASE_URL)


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
                } else if(res.rows.length > 0){
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
                } else if(res.rows.length > 0){
                    resolve(true)
                }else{
                    resolve(false)
                }
            })
        })
    })
}