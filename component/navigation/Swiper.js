import React, { Component }  from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    container: {
        /*flex:1,*/
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '20%',
    },
    imgWrapper: {
        width: '100%',
            height: 200,
    },
        imgView: {
            flex: 1,
                height: 200,
        },
        bannerImg: {
            width: '100%',
                height: 200,
                flex: 1
        }
    });

    export default class ImgSwiper extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    render() {
        if(this.state.swiperShow) {
            return (
                <View style={styles.container}>
                    <Swiper style={styles.imgWrapper}  height={200}
                            showsButtons={true} autoplay={true}
                    >
                        <View style={styles.imgView}>
                            <Image source={ require('../../images/banner/1.jpg')} style={styles.bannerImg} />
                        </View>
                        <View style={styles.imgView}>
                            <Image source={ require('../../images/banner/2.jpg')} style={styles.bannerImg} />
                        </View>
                        <View style={styles.imgView}>
                            <Image source={ require('../../images/banner/3.jpg')} style={styles.bannerImg} />
                        </View>
                        <View style={styles.imgView}>
                            <Image source={ require('../../images/banner/4.jpg')} style={styles.bannerImg} />
                        </View>
                    </Swiper>
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <Image source={ require('../../images/banner/1.jpg')} style={styles.bannerImg} />
                </View>
            )
        }
    }
}