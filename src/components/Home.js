import React, {useState} from 'react';
import {Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {StyleSheet, SafeAreaView} from 'react-native';
import ObjectListItem from "./ObjectListItem";
import fakeObjects from "../helpers/FakeObjects";
import {connect} from 'react-redux';


const Home = ({navigation, favObjects}) => {
    const [objects, setObjects] = useState(fakeObjects);


    const navigateToObjectDetails = async(objectData) => {
        navigation.navigate("ViewMyObject", {objectData});
    };

    const amIaFavObject = (objectID) => {
        return (favObjects.findIndex(i => i === objectID) !== -1);
    };

    const renderItem = ({item}) => {
        return (<ObjectListItem objectData={item} onClick={navigateToObjectDetails} isFav={amIaFavObject(item.id)} />);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Layout style={styles.searchContainer}>
                <Text status="danger" category='h1'>HOME</Text>
            </Layout>
            <List
                data={objects}
                extraData={favObjects}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return {
        favObjects: state.favObjectID
    }
}

export default connect(mapStateToProps)(Home);

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