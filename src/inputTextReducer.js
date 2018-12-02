const INITIAL_STATE = { value : 'Ola mundo'}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_ACTION':
            return { value: action.payload }
        default:
            return state
    }
}