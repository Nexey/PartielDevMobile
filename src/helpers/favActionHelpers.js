export const saveObject = async (valueData, dispatch) => {
    const action = { type: 'SAVE_OBJECT', value: valueData };
    dispatch(action);
}

export const unsaveObject = async (valueData, dispatch) => {
    const action = { type: 'UNSAVE_OBJECT', value: valueData };
    dispatch(action);
}

export const mapStateToProps = (state) => {
    return {
        favObjects: state.favObjectID
    }
}
