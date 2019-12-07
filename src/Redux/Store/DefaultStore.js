import {
	KEY_STORAGE
} from '../../Utils/consts'

export const auth = {
	token: localStorage.getItem(KEY_STORAGE) || null,
	loading: false
}

export const projects = []

export const user = {
	currentLogged: {
		id: null,																	// "5de1bbd2b44e6a3cc9ae5493"
		email: null, 															// "carlos@westpoint.io"
		level: null
	},
	users: []
}