import axios from 'axios'

import { KEY_STORAGE, TOKEN_FETCHED, SIGN_OUT } from '../../Utils/consts'
import { auth } from '../Store/DefaultStore'

export default (INITIAL_STATE = auth, action) => {
    switch(action.type) {
        case TOKEN_FETCHED:
            localStorage.setItem(KEY_STORAGE, action.payload)
            axios.defaults.headers.common.token = action.payload
            return { ...INITIAL_STATE, token: action.payload }
        
        case SIGN_OUT:
            localStorage.removeItem(KEY_STORAGE)
            axios.defaults.headers.common.token = null
            return { ...INITIAL_STATE, token: null }
            
        default: 
            return INITIAL_STATE
    }
}