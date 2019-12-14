import axios from 'axios'

import { BASE_URL } from '../../Utils/consts'

export const getOneEvent = () => { }

export const getAllEvents = () => { }

export const postEvent = values => {
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