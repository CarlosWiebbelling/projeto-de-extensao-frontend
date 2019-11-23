import axios from 'axios'

import {
    BASE_URL,
    PROJECT_FETCHED
} from '../../Utils/consts'

export const getProjects = () => {
    return dispatch => {
        axios.get(`${ BASE_URL }/project`)
            .then(response =>
                dispatch({
                    type: PROJECT_FETCHED,
                    payload: response.data.projects
                })
            )
            .catch(error => console.error(error))
    }
}

export const postProject = values => dispatch => {
    
    values['tags'] = [
        {
            name: 'ADM'
        },
        {
            name: 'TECH'
        },
        {
            name: 'LG'
        }
    ]
    values['projectAdmins'] = [
        {
            name: 'Carlos Eduardo'
        },
        {
            name: 'Gabriel Pucinelli'
        },
        {
            name: 'Andrei Deniz'
        }
    ]

    axios.post(`${ BASE_URL }/project`, values)
        .then(response => {
            console.log(response)
            dispatch(getProjects())
        })
        .catch(error => {
            console.error(error)
            dispatch({
                type: "NOTHING"
            })
        })
}