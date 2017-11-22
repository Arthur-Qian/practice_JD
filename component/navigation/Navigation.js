/**
 * Created by Tony on 2017/11/10.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import HomeScreen from './pages/Home'
import CategoryScreen from './pages/Category'
import FaxianScreen from './pages/Faxian'
import PersonScreen from './pages/Person'
import CartScreen from './pages/Cart'

const TabNavigation = TabNavigator({
    HomeScreen: {screen: HomeScreen},
    CategoryScreen: {screen: CategoryScreen},
    FaxianScreen: {screen: FaxianScreen},
    CartScreen: {screen: CartScreen},
    PersonScreen: {screen: PersonScreen},
    },{
        //tabBarComponent: TabBarBottom,
        tabBarPosition:'bottom',
        animationEnabled: true,
        headerMode:'none',
        swipeEnabled:false,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            showIcon:true,
            showLabel:false,
            fontSize:7,
            style:{
                backgroundColor:"black"
            },
            tabStyle: {
                height: 60,
            },

        }
});

const StackNavigation = StackNavigator({
    Home: { screen: TabNavigation }
    },
    {
        headerMode: 'none',
    },
)

export default class Stack extends Component<{}> {
    render() {
        return <StackNavigation />
    }
}

