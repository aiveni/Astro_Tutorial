import { Client } from "pg"

export const createUser = (username, password, email) => {
    const client = new Client(process.env.DATABASE_URL)
    client.connect().then((_) => {
        client.query(`INSERT INTO public."User" (username, "password", email) VALUES('${username}', '${password}', '${email}');`, (err, _) => {
            client.end()
            if (err) {
                console.log(err)
            }
        })
    })
}

export const addComment = async (comment, post, user) => {
    const client = new Client(process.env.DATABASE_URL)
    return new Promise((resolve, reject) => {
        client.connect().then((_) => {
            client.query(`insert into public."Comment" ("comment", post, "user") VALUES('${comment}', ${post}, '${user}');`, (err, res) => {
                client.end()
                if (err) {
                    console.log(err)
                    reject(err)
                } else{
                    resolve()
                }
            })
        })
    })
}