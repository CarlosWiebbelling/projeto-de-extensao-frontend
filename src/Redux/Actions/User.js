import axios from 'axios'

import { BASE_URL, USER_UPDATED, USER_DELETED } from '../../Utils/consts'

export const update = values => dispatch => {
    axios.post(`${ BASE_URL }/user/${ values._id }`, values)
        .then(response => {
            console.log(response)
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

export const getAll = () => dispatch => {
    axios.get(`${ BASE_URL }/user`)
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

export const getOne = values => dispatch => {
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

export const deleteOne = values => dispatch => {
    axios.get(`${ BASE_URL }/user/${ values._id }`)
        .then(response => {
            console.log(response)
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
