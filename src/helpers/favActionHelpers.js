import React from 'react';
import {Button} from "@ui-kitten/components";

export const saveMovie = async (id, dispatch) => {
    const action = { type: 'SAVE_MOVIE', id: id };
    dispatch(action);
}

export const deleteMovie = async (id, dispatch) => {
    const action = { type: 'DELETE_MOVIE', id: id };
    dispatch(action);
}

export const mapStateToProps = (state) => {
    return {
        favMovies: state.favMovieID
    }
}

export const displaySaveObject = (id, dispatch, favObjects) => {
    if (favObjects.findIndex(i => i === id) !== -1) {
        // L'object est sauvegardé
        return (
            <Button
                title='Retirer des favoris'
                onPress={() => deleteMovie(id, dispatch)}
            >
                Retirer des favoris
            </Button>
        );
    }
    // L'object n'est pas sauvegardé
    return (
        <Button
            title='Ajouter aux favoris'
            onPress={() => saveMovie(id, dispatch)}
        >
            Ajouter aux favoris
        </Button>
    );
}