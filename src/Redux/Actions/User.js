import axios from 'axios'

import { 
    BASE_URL, 
    USER_UPDATED, 
    USER_DELETED, 
    USER_FETCHED, 
    USER_FETCHED_ALL
} from '../../Utils/consts'

export const updateUser = values => dispatch => {
    axios.post(`${ BASE_URL }/user/${ values._id }`, values)
        .then(response => {
            console.log(response)
            dispatch(getAllUsers())
            dispatch({
                type: USER_UPDATED
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: "NOTHING"
            })
        })
}

export const getAllUsers = () => dispatch => {
    axios.get(`${ BASE_URL }/user`)
        .then(response => {
            console.log(response)
            dispatch({
                type: USER_FETCHED_ALL
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: "NOTHING"
            })
        })
}

export const getOneUser = values => dispatch => {
    axios.get(`${ BASE_URL }/user/${ values._id }`)
        .then(response => {
            console.log(response)
            dispatch({
                type: USER_FETCHED
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: "NOTHING"
            })
        })
}

export const deleteUser = values => dispatch => {
    axios.get(`${ BASE_URL }/user/${ values._id }`)
        .then(response => {
            console.log(response)
            dispatch(getAllUsers())
            dispatch({
                type: USER_DELETED
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: "NOTHING"
            })
        })
}
