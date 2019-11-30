import { user } from '../Store/DefaultStore'

import {
    USER_FETCHED,
    USER_FETCHED_ALL
} from '../../Utils/consts'

export default (INITIAL_STATE = user, action) => {
    switch(action.type) {
        case USER_FETCHED: 
            return { ...INITIAL_STATE, user: action.payload }

        case USER_FETCHED_ALL: 
            return { ...INITIAL_STATE, users: action.payload }
                    
        default:
            return INITIAL_STATE
    }
}