import axios from 'axios'

import {
    BASE_URL,
    PROJECT_FETCHED
} from '../../Utils/consts'

export const getProjects = () => {
    return dispatch => {
        // axios.get(`${ BASE_URL }/project`)
        //     .then(response => {
        //         dispatch({
        //             type: PROJECT_FETCHED,
        //             payload: [{
        //                 id: '0',
        //                 name: 'JOGUE lasmdsjnda',
        //                 description: 'HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND ',
        //                 projectAdmins: [
        //                     0, 1, 2
        //                 ]
        //             }, {
        //                 id: '0',
        //                 name: 'JOGUE KKKKKKKKKKKKKKKK',
        //                 description: 'HELLO kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk',
        //                 projectAdmins: [
        //                     0, 1, 2
        //                 ]
        //             }]
        //         })

        //     })
        //     .catch(error => console.error(error))
        
        dispatch({
            type: PROJECT_FETCHED,
            payload: [
                {
                    id: '0',
                    title: 'JOGUE lasmdsjnda',
                    description: 'HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND HELLO MY FRIEND ',
                    projectAdmins: [
                        0, 1, 2
                    ]
                }, {
                    id: '1',
                    title: 'JOGUE kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk',
                    description: 'HELLO kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkk',
                    projectAdmins: [
                        0, 1, 2
                    ]
                }
            ]
        })
    }
}