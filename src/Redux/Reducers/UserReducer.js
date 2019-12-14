import { user } from '../Store/DefaultStore'

import { getJwtDecoder } from '../../Helpers/JWT'

import {
    USER_FETCHED_ALL,
    TOKEN_FETCHED
} from '../../Utils/consts'

export default (INITIAL_STATE = user, action) => {
    switch (action.type) {
        case TOKEN_FETCHED:
            let decoded = getJwtDecoder(action.payload)
            return { ...INITIAL_STATE, currentLogged: decoded }

        case USER_FETCHED_ALL:
            return { ...INITIAL_STATE, users: action.payload }

        default:
            return INITIAL_STATE
    }
}