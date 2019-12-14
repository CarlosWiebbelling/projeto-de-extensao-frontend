import {
	KEY_STORAGE
} from '../../Utils/consts'

import { jwtDecoder } from '../../Helpers/JWT'

let token = localStorage.getItem(KEY_STORAGE) || null

export const auth = {
	token: token,
	loading: false
}

export const projects = []

export const user = token
	? { currentLogged: jwtDecoder(token), users: [] }
	: {
		currentLogged: {
			id: null,
			email: null,
			level: null
		},
		users: []
	}


