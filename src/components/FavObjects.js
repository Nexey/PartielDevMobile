import React, { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';

import ObjectListItem from '../components/ObjectListItem';
import {Layout, List} from "@ui-kitten/components";
import fakeObjects from "../helpers/FakeObjects";
import {mapStateToProps} from "../helpers/favActionHelpers";

const FavObjects = ({ navigation, favObjects }) => {
    const [objects, setObjects] = useState([]);

    const navigateToObjectDetails = async(objectData) => {
        navigation.navigate("ViewMyObject", {objectData});
    };

    const amIaFavObject = (objectID) => {
        return (favObjects.findIndex(i => i === objectID) !== -1);
    };

    useEffect(() => {
        (async () => {
            await refreshObjects();
        })();
    }, [favObjects]);

    const getObjectById = (id) => {
        /*
        console.log(fakeObjects.find(obj => obj.id === id));

        if (fakeObjects.findIndex(obj => obj.id === id) !== -1) {
            console.log(fakeObjects.find(obj => obj.id === id).id);
        }

        for (let test of fakeObjects) {
            if (id === test.id) {
                return test;
            }
        }
        return [];
        //*/

        return fakeObjects.find(obj => obj.id === id);
    }

    const refreshObjects = async () => {
        let objects = [];
        try {
            for (const id of favObjects) {
                objects.push(getObjectById(id));
            };
            setObjects(objects);
        } catch (error) {
            console.log("erreur xD");
        }
    };

    const renderItem = ({item}) => {
        return (<ObjectListItem objectData={item} onClick={navigateToObjectDetails} isFav={amIaFavObject(item.id)} />);
    }

    return (
        <View style={styles.container}>
            <List
                data={objects}
                extraData={favObjects}
                renderItem={renderItem}
            />
        </View>
    );
};


export default connect(mapStateToProps)(FavObjects);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
});