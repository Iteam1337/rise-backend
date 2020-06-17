import config from './../config'
import { sign, verify } from 'jsonwebtoken'
import { createUser, getUserByEmail, getUserById } from './users'
import { errors } from 'pg-promise'
import { verifyPassword } from '../helpers/password'

export type User = {
  id: string
  email: string
}

export const verifyTokenAgainstUserRecords = async (
  token: string,
  privateKey: string
) => {
  try {
    token = token.split('Bearer ')[1]

    const payload = verify(token, privateKey) as User

    if (payload && payload.id) {
      const user = await getUserById(payload.id)

      // User not found
      if (!user) {
        throw new Error()
      }

      return { id: user.id, email: user.email } as User
    }
  } catch (error) {
    throw new Error()
  }
}

const authenticate = async (email: string, password: string) => {
  const res = await getUserByEmail(email)

  if (
    res instanceof errors.QueryResultError &&
    res.code === errors.queryResultErrorCode.noData
  ) {
    throw new Error()
  }

  if ((await verifyPassword(password, res.password)) !== true) {
    throw new Error()
  }

  return res as User
}

export const login = async (
  email: string,
  password: string
): Promise<any> => {
  const user = await authenticate(email, password)

  const tokenPayload = {
    email: user.email,
    id: user.id,
  }

  const token = sign(tokenPayload, config.JWT_SECRET)

  return {
    token,
    email: user.email,
    id: user.id,
  }
}

export const register = async (
  email: string,
  password: string,
): Promise<any> => {
  const res = await getUserByEmail(email)
  const userExists = res && res.email === email

  if (userExists) {
    throw new Error()
  }

  try {
    const user = await createUser({
      email: email,
      password,
    })

    if (user) {
      const tokenPayload = {
        email: user.email,
        id: user.id,
      }

      const token = sign(tokenPayload as object, config.JWT_SECRET)

      return {
        id: String(user.id),
        token,
        email: user.email,
      }
    } else {
      throw new Error()
    }
  } catch (error) {
    throw new Error()
  }
}