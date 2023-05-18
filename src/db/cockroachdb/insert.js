import { Client } from "pg"
console.log("B")
console.log(process.env.DATABASE_URL)

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