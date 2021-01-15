import React, {useEffect} from 'react';
import {Button, Icon, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {displaySaveObject, mapStateToProps, saveObject, unsaveObject} from "../helpers/favActionHelpers";

const MyObject = ({favObjects, dispatch, route}) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title={route.params.objectData.name} alignment='center'/>
            <Layout style={styles.container}>
                <Layout style={styles.informationContainer}>
                    <Layout style={styles.title}>
                        <Text category='h1'>
                            Nom : {route.params.objectData.name}
                        </Text>
                        <Text category='h2' status="info">
                            ID : {route.params.objectData.id}
                        </Text>
                    </Layout>
                    <Layout>
                        {displaySaveObject(route.params.objectData.id, dispatch, favObjects)}
                    </Layout>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(MyObject);

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