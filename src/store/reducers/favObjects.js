const initialState = { favOjectID: [] }

function favList(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'SAVE_LOCATION':
            nextState = {
                ...state,
                favOjectID: [...state.favOjectID, action.value]
            };
            return nextState || state
        case 'UNSAVE_LOCATION':
            nextState = {
                ...state,
                favOjectID: state.favOjectID.filter(id => id !== action.value)
            };
            return nextState || state
        default:
            return state
    }
}

export default favList;