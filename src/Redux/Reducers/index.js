import { combineReducers } from 'redux'

import Auth from './AuthReducer'
import Dashboard from './DashboardReducer'

export default combineReducers({
    Auth,
    Dashboard
}) 