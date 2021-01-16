import React, {useState} from 'react';
import {Layout, List, Text, TopNavigation, Icon, Divider, Button, Spinner} from '@ui-kitten/components';
import {StyleSheet, SafeAreaView} from 'react-native';
import MovieListItem from "./MovieListItem";
import {connect} from 'react-redux';
import {mapStateToProps} from "../helpers/favActionHelpers";
import {getMoviesByPopularity} from "../api/TheMovieDataBase";


const Home = ({navigation, favMovies}) => {
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPopularMovies = async() => {
        await setIsLoading(true);
        let response = await getMoviesByPopularity();
        await setListMovies(response.data.results);
        await setIsLoading(false);
    }

    const navigateToObjectDetails = async(movieDetails) => {
        navigation.navigate("ViewMovieDetail", {movieDetails});
    };

    const amIaFavObject = (objectID) => {
        return (favMovies.findIndex(i => i === objectID) !== -1);
    };

    const renderItem = ({item}) => {
        return (<MovieListItem movieDetails={item} onClick={navigateToObjectDetails} isFav={amIaFavObject(item.id)} />);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title='MyApp' alignment='center'/>
            <Layout style={styles.searchContainer}>
                <Text status="danger" category='h1'>HOME</Text>
            </Layout>
            <Button
                onPress={getPopularMovies}
            >
                Test
            </Button>
            {isLoading ?
                <Spinner/> :
                <List
                    data={listMovies}
                    extraData={favMovies}
                    renderItem={renderItem}
                />
            }
        </SafeAreaView>
    );
};

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
    tinyIcon: {
        height:32,
        width:32,
        tintColor:'#32988c'
    },
});