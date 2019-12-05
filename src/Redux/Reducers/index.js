import { combineReducers } from 'redux'

import Auth from './AuthReducer'
import User from './UserReducer'
import Project from './ProjectReducer'

export default combineReducers({
    Auth,
    User,
    Project
})