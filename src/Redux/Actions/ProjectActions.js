import axios from 'axios'

import {
    BASE_URL,
    PROJECT_FETCHED,
    PROJECT_FETCHED_ONE,
    // PROJECT_DELETED
} from '../../Utils/consts'

export const getAllProjects = () => dispatch => {
    axios.get(`${BASE_URL}/project`)
        .then(response =>
            dispatch({
                type: PROJECT_FETCHED,
                payload: response.data.projects
            })
        )
        .catch(error => console.error(error))
}

export const getOneProject = values => dispatch => {
    axios.get(`${BASE_URL}/project/${values._id}`)
        .then(response =>
            dispatch({
                type: PROJECT_FETCHED_ONE,
                payload: response.data.projects
            })
        )
        .catch(error => console.error(error))
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

    values['projectAdmins'] = ['pablo2@gmail.com', 'carlos@westpoint.io']

    axios.post(`${BASE_URL}/project`, values)
        .then(response =>
            dispatch(getAllProjects())
        )
        .catch(error =>
            dispatch({
                type: "NOTHING"
            })
        )
}

export const deleteProject = id => dispatch => {
    axios.delete(`${BASE_URL}/project/${id}`)
        .then(response => {
            dispatch(getAllProjects())
            dispatch(getAllProjects())
        }
        )
        .catch(error => console.error(error))
}
