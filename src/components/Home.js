import React, {useState} from 'react';
import {Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet, SafeAreaView} from 'react-native';
import ObjectListItem from "./ObjectListItem";
import fakeObjects from "../helpers/FakeObjects";


const Home = ({navigation}) => {
    const [objects, setObjects] = useState(fakeObjects);

    const navigateToLocationDetails = async(objectData) => {
        navigation.navigate("ViewMyObject", {objectData});
    };

    const renderItem = ({item}) => {
        return (<ObjectListItem objectData={item} onClick={navigateToLocationDetails} />);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Layout style={styles.searchContainer}>
                <Text status="danger" category='h1'>HOME</Text>
            </Layout>
            <List
                data={objects}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
});