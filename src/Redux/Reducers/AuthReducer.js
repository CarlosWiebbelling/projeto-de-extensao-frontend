import { auth } from '../Store/DefaultStore'

export default (action, INITIAL_STATE = auth) => {
    switch(action.type) {
        case 'LOGIN': 
            return { ...INITIAL_STATE }
            
        default: 
            return INITIAL_STATE
    }
}