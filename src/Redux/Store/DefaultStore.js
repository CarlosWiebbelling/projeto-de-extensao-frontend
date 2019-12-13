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
		id: null,
		email: null,
		level: null
	},
	users: []
}