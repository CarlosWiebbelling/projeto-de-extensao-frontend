import { auth } from '../Store/DefaultStore'

export default (INITIAL_STATE = auth, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { ...INITIAL_STATE }
            
        default: 
            return INITIAL_STATE
    }
}