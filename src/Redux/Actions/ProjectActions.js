import axios from 'axios'
import { adminSpliter, tagsSpliter } from '../../Helpers/helpers'

import {
    BASE_URL,
    PROJECT_FETCHED,
    PROJECT_FETCHED_ONE,
    // PROJECT_DELETED
} from '../../Utils/consts'

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

export const postProject = values => dispatch => {
    values.tags = tagsSpliter(values.tags)
    values.projectAdmins = adminSpliter(values.projectAdmins)

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
        }
        )
        .catch(error => console.error(error))
}
