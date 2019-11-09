import {
	KEY_STORAGE
} from '../../Utils/consts'

export const auth = {
	token: JSON.parse(localStorage.getItem(KEY_STORAGE)) || null,
<<<<<<< HEAD
  loading: false
=======
	loading: false
>>>>>>> 66a3ad22245130ecd30f5a47be34967bb46fd91c
}

export const projects = []