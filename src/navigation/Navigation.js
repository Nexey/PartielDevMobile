import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab, Icon, Text} from '@ui-kitten/components';
import Home from "../components/Home";

const { Navigator, Screen } = createBottomTabNavigator();


const StarIcon = (props) => (
    <Icon {...props} name='star' width={24} height={24} fill='gold'/>
);
const SearchIcon = (props) => (
    <Icon {...props} name='search-outline' />
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Recherche' icon={SearchIcon}/>
        <BottomNavigationTab title='Mes Favoris' icon={StarIcon}>Test</BottomNavigationTab>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator
        initialRouteName="Search"
        tabBar={props => <BottomTabBar {...props} />}
    >
        <Screen name='ViewSearch' component={Home}/>
        <Screen name='ViewFavoris' component={Home}/>
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

export default AppNavigator;