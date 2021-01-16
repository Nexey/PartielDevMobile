import React, {useEffect} from 'react';
import {Button, Icon, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {displaySaveObject, mapStateToProps} from "../helpers/favActionHelpers";

const MovieDetails = ({favMovies, dispatch, route}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title={route.params.movieDetails.title} alignment='center'/>
            <Layout style={styles.container}>
                <Layout style={styles.informationContainer}>
                    <Layout style={styles.title}>
                        <Text category='h1'>
                            Nom : {route.params.movieDetails.title}
                        </Text>
                        <Text category='h2' status="info">
                            ID : {route.params.movieDetails.id}
                        </Text>
                    </Layout>
                    <Layout>
                        {displaySaveObject(route.params.movieDetails.id, dispatch, favMovies)}
                    </Layout>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(MovieDetails);

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    informationContainer: {
        flex: 1,
        marginLeft: 0,
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    statContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 16,
    },
    cuisine: {
        fontStyle: 'italic',
    },
    stat: {
        marginLeft: 4,
    },
});