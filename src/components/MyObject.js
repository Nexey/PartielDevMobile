import React, {useEffect} from 'react';
import {Button, Icon, Layout, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet } from 'react-native';

const MyObject = ({navigation, route}) => {
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    /*
    useEffect(() => {
        (async () => {
            let test = await getLocationNameByLatLon(locationData.coord.lat, locationData.coord.lon);
            console.log(JSON.stringify(test.data[0]));
        })();
    }, [])

    //console.log(JSON.stringify(locationData.coord.lat + locationData.coord.lon));
    //*/

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
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
                    <Layout style={styles.statsContainer}>
                        <Button
                            title="Favori"
                        >Rajouter aux favoris</Button>
                    </Layout>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

export default MyObject;

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