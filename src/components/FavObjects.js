import React, { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';

import ObjectListItem from '../components/ObjectListItem';
import {Layout, List} from "@ui-kitten/components";
import fakeObjects from "../helpers/FakeObjects";

const FavObjects = ({ navigation, favObjects }) => {
    const [objects, setObjects] = useState([]);

    const navigateToObjectDetails = async(objectData) => {
        navigation.navigate("ViewMyObject", {objectData});
    };

    const amIaFavObject = (objectID) => {
        return (favObjects.findIndex(i => i === objectID) !== -1);
    };

    //*
    useEffect(() => {
        (async () => {
            await refreshObjects();
        })();
    }, [favObjects]);
    //*/

    const getObjectById = (id) => {
        for (let test of fakeObjects) {
            if (id === test.id)
                return test;
        }
        return [];
    }

    //console.log(getObjectById(6454368));

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
    /*
    const navigateToRestaurantDetails = (restaurantID) => {
        navigation.navigate("ViewRestaurant", { restaurantID });
    };

    const amIaFavRestaurant = (restaurantID) => {
        if (favRestaurants.findIndex(i => i === restaurantID) !== -1) {
            return true;
        }
        return false;
    };
    */

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

const mapStateToProps = (state) => {
    return {
        favObjects: state.favObjectID
    }
}
export default connect(mapStateToProps)(FavObjects);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
});