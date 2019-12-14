import { decode } from 'jsonwebtoken'

const jwtDecoder = token => { return decode(token) }

export const getJwtDecoder = token => { return jwtDecoder(token) }

export const jwtValidator = token => (Date.now() / 1000) > jwtDecoder(token).iat

