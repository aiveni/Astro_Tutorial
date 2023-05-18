import { Client } from "pg"
import process from 'node:process';
if (process.env.NODE_ENV !== 'production') {
    import("dotenv").then((dotenv) => dotenv.config())
}

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