const initialState = { favObjectID: [] }

function favObjects(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'SAVE_OBJECT':
            nextState = {
                ...state,
                favObjectID: [...state.favObjectID, action.value]
            };
            return nextState || state
        case 'UNSAVE_OBJECT':
            nextState = {
                ...state,
                favObjectID: state.favObjectID.filter(id => id !== action.value)
            };
            return nextState || state
        default:
            return state
    }
}

export default favObjects;