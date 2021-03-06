import { projects } from '../Store/DefaultStore'

import { PROJECT_FETCHED } from '../../Utils/consts';

export default (INITIAL_STATE = projects, action) => {
    switch(action.type) {
        case PROJECT_FETCHED:
            return { ...INITIAL_STATE, projects: action.payload}
        
        default: 
            return INITIAL_STATE
    }
}
