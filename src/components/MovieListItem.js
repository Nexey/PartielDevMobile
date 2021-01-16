import React from 'react';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity } from 'react-native';

const MovieListItem = ({movieDetails, onClick, isFav = false}) => {
    const Header = (props) => (
        <Layout {...props}>
            <Text category='h2'>
                {movieDetails.title}
            </Text>
        </Layout>
    );

    return (
        <Card style={styles.card} header={Header} status="info" onPress={() => (onClick(movieDetails))}>
            <Layout style={styles.container}>
                <Layout style={styles.informationContainer}>
                    <Layout style={styles.title}>
                        <Text category='h6'>
                            {movieDetails.id}
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        </Card>
    );
};

export default MovieListItem;

const styles = StyleSheet.create({
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
    card: {
        flex: 1,
        margin: 2,
    },
});