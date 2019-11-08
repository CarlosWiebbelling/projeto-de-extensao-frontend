import { combineReducers } from 'redux'

import Auth from './AuthReducer'
import Project from './ProjectReducer'

export default combineReducers({
    Auth,
    Project
})