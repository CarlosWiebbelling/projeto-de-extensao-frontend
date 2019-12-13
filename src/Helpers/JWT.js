import { decode } from 'jsonwebtoken'

export const jwtDecoder = token => {let a = decode(token); return a}