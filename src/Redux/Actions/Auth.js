import axios from 'axios'

import {
    TOKEN_FETCHED,
    BASE_URL
} from '../../Utils/consts'

export const token_fetched = token => ({
    type: TOKEN_FETCHED,
    payload: token
})

export const login = values => dispatch => {
    axios.post(`${ BASE_URL }/login`, values)
        .then(response =>
            dispatch({
                type: TOKEN_FETCHED,
                payload: response.data.token
            })
        )
        .catch(error => {
            console.error(error.message)
            dispatch({
                type: "NOTHING"
            })
        })
}

export const register = values => dispatch => {
    axios.post(`${ BASE_URL }/user`, values)
        .then(response =>
            dispatch({
                type: "NOTHING"
            }))
        .catch(error => 
            dispatch({
                type: "NOTHING"
            }))
}