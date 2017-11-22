/**
 * Created by Tony on 2017/11/10.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class PersonalScreen extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: 'Home',
        title:"Home",
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/personal_normal.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return <Text>Hello, Navigation!</Text>;
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 24,
    },
});