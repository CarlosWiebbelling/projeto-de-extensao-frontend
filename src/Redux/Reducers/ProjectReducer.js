import { projects } from '../Store/DefaultStore'

import { PROJECT_FETCHED } from '../../Utils/consts';

export default (INITIAL_STATE = projects, action) => {

    
    switch(action.type) {
        case PROJECT_FETCHED:
            console.log('peguei a action ', action.payload)
            return action.payload
        
        default: 
            return INITIAL_STATE
    }
}