import { combineReducers } from 'redux'

import Auth from '../Reducers/AuthReducer'
import Dashboard from '../Reducers/DashboardReducer'

export default combineReducers({
    Auth,
    Dashboard
})