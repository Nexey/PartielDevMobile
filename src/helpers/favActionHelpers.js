import React from 'react';
import {Button} from "@ui-kitten/components";

export const saveObject = async (id, dispatch) => {
    const action = { type: 'SAVE_OBJECT', id: id };
    dispatch(action);
}

export const unsaveObject = async (id, dispatch) => {
    const action = { type: 'DELETE_OBJECT', id: id };
    dispatch(action);
}

export const mapStateToProps = (state) => {
    return {
        favObjects: state.favObjectID
    }
}

export const displaySaveObject = (id, dispatch, favObjects) => {
    if (favObjects.findIndex(i => i === id) !== -1) {
        // L'object est sauvegardé
        return (
            <Button
                title='Retirer des favoris'
                onPress={() => unsaveObject(id, dispatch)}
            >
                Retirer des favoris
            </Button>
        );
    }
    // L'object n'est pas sauvegardé
    return (
        <Button
            title='Ajouter aux favoris'
            onPress={() => saveObject(id, dispatch)}
        >
            Ajouter aux favoris
        </Button>
    );
}