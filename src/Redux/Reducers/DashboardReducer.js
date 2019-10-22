import { courses } from '../Store/DefaultStore'

export default (INITIAL_STATE = courses, action) => {
    switch(action.type) {
        case 'FETCHED':
            return { ...INITIAL_STATE }
        
        default: 
            return INITIAL_STATE
    }
}