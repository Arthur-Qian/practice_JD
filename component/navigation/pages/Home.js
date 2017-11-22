/**
 * Created by Tony on 2017/11/10.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import CommonHeader from '../../home/Header'
import Swipers from '../Swiper'
import MenuButton from '../../home/MenuButton';

export default class HomeScreen extends Component<{}> {
    constructor(props) {
        super(props);
        this._onMenuClick = this._onMenuClick.bind(this);
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }


    static navigationOptions = {
        tabBarLabel: 'Home',
        title:"Home",
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../../images/home_normal.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return(
            <View>
                <CommonHeader />
                <Swipers />
                <View>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../../../images/menubutton/wdgz.png')}
                                    showText={'我的关注'} tag={'wdgz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/wlcx.png')}
                                    showText={'物流查询'} tag={'wlcx'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/cz.png')}
                                    showText={'充值'} tag={'cz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/dyp.png')}
                                    showText={'电影票'} tag={'dyp'}
                                    onClick={this._onMenuClick}/>
                    </View>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../../../images/menubutton/yxcz.png')}
                                    showText={'游戏充值'} tag={'yxcz'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/xjk.png')}
                                    showText={'小金库'} tag={'xjk'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/ljd.png')}
                                    showText={'领金豆'} tag={'ljd'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../../../images/menubutton/gd.png')}
                                    showText={'更多'} tag={'gd'}
                                    onClick={this._onMenuClick}/>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 24,
        resizeMode: 'stretch',
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10,
        flexWrap: 'wrap',
    },
});