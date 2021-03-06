import {
	KEY_STORAGE
} from '../../Utils/consts'

import { getJwtDecoder } from '../../Helpers/JWT'

let token = localStorage.getItem(KEY_STORAGE) || null

export const auth = {
	token: token,
	loading: false
}

export const projects = []

export const user = token
	? { currentLogged: getJwtDecoder(token), users: [] }
	: {
		currentLogged: {
			id: null,
			email: null,
			level: null
		},
		users: []
	}


