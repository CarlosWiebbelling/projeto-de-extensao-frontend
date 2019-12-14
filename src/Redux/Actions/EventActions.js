import axios from 'axios'

import { BASE_URL } from '../../Utils/consts'
import { getAllProjects } from '../Actions/ProjectActions'

export const getOneEvent = () => { }

export const getAllEvents = () => { }

export const postEvent = values => dispatch => {
  console.log(values)
  axios.post(`${BASE_URL}/event`, values)
    .then(response =>
      dispatch(getAllProjects())
    )
    .catch(error =>
      dispatch({
        type: "NOTHING"
      })
    )
}