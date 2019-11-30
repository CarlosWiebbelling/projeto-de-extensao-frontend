import {
	KEY_STORAGE
} from '../../Utils/consts'

export const auth = {
	token: JSON.parse(localStorage.getItem(KEY_STORAGE)) || null,
	loading: false
}

export const projects = []

export const user = {
	user: {},
	users: []
}