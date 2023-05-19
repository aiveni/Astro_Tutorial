import { Client } from "pg"

export const createUser = (username, password, email) => {
    const client = new Client("postgresql://aitorcas23:4wFk4stzwb1eMYhYNWGfQg@clean-grizzly-7829.8nj.cockroachlabs.cloud:26257/AstroDB?sslmode=verify-full")
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
    const client = new Client("postgresql://aitorcas23:4wFk4stzwb1eMYhYNWGfQg@clean-grizzly-7829.8nj.cockroachlabs.cloud:26257/AstroDB?sslmode=verify-full")
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