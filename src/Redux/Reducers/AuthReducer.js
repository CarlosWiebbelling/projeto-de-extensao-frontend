import { KEY_STORAGE } from '../../Utils/consts'
import { auth } from '../Store/DefaultStore'

export default (INITIAL_STATE = auth, action) => {
    switch(action.type) {
        case 'TOKEN_FETCHED':
            localStorage.setItem(KEY_STORAGE, action )
            return { ...INITIAL_STATE, token: action }
            
        default: 
            return INITIAL_STATE
    }
}