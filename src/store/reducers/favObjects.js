const initialState = { favObjectID: [] }

function favObjects(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'SAVE_OBJECT':
            nextState = {
                ...state,
                favObjectID: [...state.favObjectID, action.id]
            };
            return nextState || state
        case 'DELETE_OBJECT':
            nextState = {
                ...state,
                favObjectID: state.favObjectID.filter(id => id !== action.id)
            };
            return nextState || state
        default:
            return state
    }
}

export default favObjects;