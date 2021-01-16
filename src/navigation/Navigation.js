import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';
import Home from "../components/Home";
import MyObject from "../components/MovieDetails"
import FavObjects from "../components/FavoriteMovies";
import {createStackNavigator} from "@react-navigation/stack";
import MovieDetails from "../components/MovieDetails";

const { Navigator, Screen } = createBottomTabNavigator();
const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();

const StarIcon = (props) => (
    <Icon {...props} name='star' pack="feather" width={24} height={24}/>
);

const SearchIcon = (props) => (
    <Icon {...props} name='home' pack="feather" width={24} height={24}/>
);

function searchStackScreens() {
    return (
        <SearchNavigation.Navigator
            initialRouteName="ViewSearch"
        >
            <SearchNavigation.Screen
                name="ViewSearch"
                component={Home}
                options={{ title: 'Home' }}
            />
            <SearchNavigation.Screen
                name="ViewMovieDetail"
                component={MovieDetails}
                options={{ title: 'Film' }}
            />
        </SearchNavigation.Navigator>
    )
};

function favStackScreens() {
    return (
        <FavNavigation.Navigator
            initialRouteName="ViewFav"
        >
            <FavNavigation.Screen
                name="ViewFav"
                component={FavObjects}
                options={{ title: 'Favoris' }}
            />
            <FavNavigation.Screen
                name="ViewMovieDetail"
                component={MovieDetails}
                options={{ title: 'Film' }}
            />
        </FavNavigation.Navigator>
    )
};

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Home' icon={SearchIcon}/>
        <BottomNavigationTab title='Mes Favoris' icon={StarIcon}>Test</BottomNavigationTab>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator
        initialRouteName="ViewHome"
        tabBar={props => <BottomTabBar {...props} />}
    >
        <Screen name='ViewHome' component={searchStackScreens}/>
        <Screen name='ViewFavoris' component={favStackScreens}/>
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

export default AppNavigator;