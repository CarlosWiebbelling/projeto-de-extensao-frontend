import { decode } from 'jsonwebtoken'

export const jwtDecoder = token => decode(token)