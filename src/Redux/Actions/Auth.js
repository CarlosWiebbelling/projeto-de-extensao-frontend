import axios from 'axios'

import {
    TOKEN_FETCHED,
    BASE_URL,
    SIGN_OUT
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
        .catch(error =>
            dispatch({
                type: "NOTHING"
            })
        )
}

export const register = values => dispatch => {
    axios.post(`${ BASE_URL }/user`, values)
        .then(response =>
            dispatch(
                login({ email: values['email'], password: values['password']})
            )
        )
        .catch(error => 
            dispatch({
                type: "NOTHING"
            })
        )
}

export const signout = () => dispatch => dispatch({ type: SIGN_OUT })