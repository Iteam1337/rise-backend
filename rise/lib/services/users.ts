import { db, pgp } from '../adapters/postgres'
import dedent from 'dedent'
import { createHash } from '../helpers/password'

interface RegisterUser {
  email: string
  password: string
}

export async function getUserByEmail(email: String): Promise<any> {
  return await db
    .one(
      dedent`SELECT id, email, password FROM users where email = $1`,
      [email]
    )
    .then((user: any) => {
      return user
    })
    .catch(err => {
      return err
    })
}

export async function getUserById(id: String): Promise<any> {
  return db
    .one(
      dedent`SELECT id, email, password FROM users where id = $1`,
      [id]
    )
    .then((user: any) => {
      return user
    })
    .catch(err => {
      return err
    })
}

export async function createUser(user: RegisterUser) {
  const query =
    pgp.helpers.insert(
      {
        ...user,
        password: await createHash(user.password),
      },
      undefined,
      'users'
    ) + 'RETURNING id, email'

  return db
    .one(query)
    .then(user => {
      console.log(user)
      return user
    })
    .catch(e => {
      console.log(e)
      return e
    })
}
