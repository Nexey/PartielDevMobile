import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../definitions/Colors';
import MyObject from "../components/MyObject";
import FavObjects from "../components/FavObjects";
import Home from "../components/Home";

const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

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
                name="ViewMyObject"
                component={MyObject}
                options={{ title: 'My Object' }}
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
                name="ViewMyObject"
                component={MyObject}
                options={{ title: 'My Object' }}
            />
        </FavNavigation.Navigator>
    )
};

function RootStack() {
    return (
        <TabNavigation.Navigator
            tabBarOptions={{
                activeTintColor: Colors.mainGreen,
            }}>
            <TabNavigation.Screen
                name="Recherche"
                component={searchStackScreens}
            />
            <TabNavigation.Screen
                name="Favoris"
                component={favStackScreens}
            />
        </TabNavigation.Navigator>
    );
}

export default RootStack;